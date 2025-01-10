// Copyright 2017-2025 @polkadot/typegen authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { MetadataLatest, RuntimeApiMethodMetadataV15, SiLookupTypeId } from '@polkadot/types/interfaces';
import type { PortableRegistry } from '@polkadot/types/metadata';
import type { Text } from '@polkadot/types/primitive';
import type { Codec, DefinitionCall, DefinitionRpcParam, DefinitionsCall, Registry } from '@polkadot/types/types';
import type { HexString } from '@polkadot/util/types';

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { Metadata, TypeRegistry, Vec } from '@polkadot/types';
import * as definitions from '@polkadot/types/interfaces/definitions';
import { getStorage as getSubstrateStorage } from '@polkadot/types/metadata/decorate/storage/getStorage';
import { unwrapStorageType } from '@polkadot/types/util';
import kusamaMeta from '@polkadot/types-support/metadata/v15/kusama-hex';
import kusamaRpc from '@polkadot/types-support/metadata/v15/kusama-rpc';
import kusamaVer from '@polkadot/types-support/metadata/v15/kusama-ver';
import polkadotMeta from '@polkadot/types-support/metadata/v15/polkadot-hex';
import polkadotRpc from '@polkadot/types-support/metadata/v15/polkadot-rpc';
import polkadotVer from '@polkadot/types-support/metadata/v15/polkadot-ver';
import substrateMeta from '@polkadot/types-support/metadata/v15/substrate-hex';
import { isHex, stringCamelCase, stringLowerFirst } from '@polkadot/util';

import { assertFile, getMetadataViaWs, getRpcMethodsViaWs } from './util/index.js';

interface SectionItem {
  link?: string;
  name: string;
  [bullet: string]: undefined | string | Vec<Text>;
}

interface Section {
  link?: string;
  name: string;
  description?: string;
  items: SectionItem[];
}

interface Page {
  title: string;
  description: string;
  sections: Section[];
}

type ApiDef = [apiHash: string, apiVersion: number];

interface StaticDef {
  meta: HexString;
  rpc?: { methods: string[] };
  ver?: { apis: ApiDef[] }
}

const headerFn = (runtimeDesc: string) => `\n\n(NOTE: These were generated from a static/snapshot view of a recent ${runtimeDesc}. Some items may not be available in older nodes, or in any customized implementations.)`;

const ALL_STATIC: Record<string, StaticDef> = {
  kusama: {
    meta: kusamaMeta,
    rpc: kusamaRpc,
    ver: kusamaVer as unknown as { apis: ApiDef[] }
  },
  polkadot: {
    meta: polkadotMeta,
    rpc: polkadotRpc,
    ver: polkadotVer as unknown as { apis: ApiDef[] }
  },
  substrate: {
    meta: substrateMeta
  }
};

/** @internal */
function docsVecToMarkdown (docLines: Vec<Text>, indent = 0): string {
  const md = docLines
    .map((docLine) =>
      docLine
        .toString()
        .trimStart()
        .replace(/^r"/g, '')
        .trimStart()
    )
    .reduce((md, docLine) => // generate paragraphs
      !docLine.length
        ? `${md}\n\n` // empty line
        : /^[*-]/.test(docLine.trimStart()) && !md.endsWith('\n\n')
          ? `${md}\n\n${docLine}` // line calling for a preceding linebreak
          : `${md} ${docLine.replace(/^#{1,3} /, '#### ')} `
    , '')
    .replace(/#### <weight>/g, '<weight>')
    .replace(/<weight>(.|\n)*?<\/weight>/g, '')
    .replace(/#### Weight:/g, 'Weight:');

  // prefix each line with indentation
  return md?.split('\n\n').map((line) => `${' '.repeat(indent)}${line}`).join('\n\n');
}

function renderPage (page: Page): string {
  let md = `---\ntitle: ${page.title}\n---\n\n`;

  if (page.description) {
    md += `${page.description}\n\n`;
  }

  // index
  page.sections.forEach((section) => {
    md += `- **[${stringCamelCase(section.name)}](#${stringCamelCase(section.name).toLowerCase()})**\n\n`;
  });

  // contents
  page.sections.forEach((section) => {
    md += '\n___\n\n\n';
    md += section.link
      ? `<h2 id="#${section.link}">${section.name}</h2>\n`
      : `## ${section.name}\n`;

    if (section.description) {
      md += `\n_${section.description}_\n`;
    }

    section.items.forEach((item) => {
      md += ' \n';
      md += item.link
        ? `<h3 id="#${item.link}">${item.name}</h3>`
        : `### ${item.name}`;

      Object
        .keys(item)
        .filter((key) => !['link', 'name'].includes(key))
        .forEach((bullet) => {
          md += `\n- **${bullet}**: ${
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            item[bullet] instanceof Vec
              ? docsVecToMarkdown(item[bullet], 2).toString()
              : item[bullet]
          }`;
        });

      md += '\n';
    });
  });

  return md;
}

function sortByName<T extends { name: Codec | string }> (a: T, b: T): number {
  // case insensitive (all-uppercase) sorting
  return a.name.toString().toUpperCase().localeCompare(b.name.toString().toUpperCase());
}

function getSiName (lookup: PortableRegistry, type: SiLookupTypeId): string {
  const typeDef = lookup.getTypeDef(type);

  return typeDef.lookupName || typeDef.type;
}

/** @internal */
function addRpc (_runtimeDesc: string, rpcMethods?: string[]): string {
  return renderPage({
    description: 'The following sections contain known RPC methods that may be available on specific nodes (depending on configuration and available pallets) and allow you to interact with the actual node, query, and submit.',
    sections: Object
      .keys(definitions)
      .filter((key) => Object.keys(definitions[key as 'babe'].rpc || {}).length !== 0)
      .sort()
      .reduce((all: Section[], _sectionName): Section[] => {
        const section = definitions[_sectionName as 'babe'];

        Object
          .keys(section.rpc || {})
          .sort()
          .forEach((methodName) => {
            const method = section.rpc?.[methodName];

            if (!method) {
              throw new Error(`No ${methodName} RPC found in ${_sectionName}`);
            }

            const sectionName = method.aliasSection || _sectionName;
            const jsonrpc = (method.endpoint || `${sectionName}_${methodName}`);

            if (rpcMethods) {
              // if we are passing the rpcMethods params and we cannot find this method, skip it
              if (jsonrpc !== 'rpc_methods' && !rpcMethods.includes(jsonrpc)) {
                return;
              }
            }

            const topName = method.aliasSection ? `${_sectionName}/${method.aliasSection}` : _sectionName;
            let container = all.find(({ name }) => name === topName);

            if (!container) {
              container = { items: [], name: topName };

              all.push(container);
            }

            const args = method.params.map(({ isOptional, name, type }: DefinitionRpcParam): string => {
              // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
              return name + (isOptional ? '?' : '') + ': `' + type + '`';
            }).join(', ');
            const type = '`' + method.type + '`';

            container.items.push({
              interface: '`' + `api.rpc.${sectionName}.${methodName}` + '`',
              jsonrpc: '`' + jsonrpc + '`',
              // link: jsonrpc,
              name: `${methodName}(${args}): ${type}`,
              ...((method.description && { summary: method.description }) || {}),
              ...((method.deprecated && { deprecated: method.deprecated }) || {}),
              ...((method.isUnsafe && { unsafe: 'This method is only active with appropriate flags' }) || {})
            });
          });

        return all;
      }, []).sort(sortByName),
    title: 'JSON-RPC'
  });
}

/** @internal */
function getMethods (registry: Registry, methods: Vec<RuntimeApiMethodMetadataV15>) {
  const result: Record<string, DefinitionCall> = {};

  methods.forEach((m) => {
    const { docs, inputs, name, output } = m;

    result[name.toString()] = {
      description: docs.map((d) => d.toString()).join(),
      params: inputs.map(({ name, type }) => {
        return { name: name.toString(), type: registry.lookup.getName(type) || registry.lookup.getTypeDef(type).type };
      }),
      type: registry.lookup.getName(output) || registry.lookup.getTypeDef(output).type
    };
  });

  return result;
}

/** @internal */
function getRuntimeDefViaMetadata (registry: Registry) {
  const result: DefinitionsCall = {};
  const { apis } = registry.metadata;

  for (let i = 0, count = apis.length; i < count; i++) {
    const { methods, name } = apis[i];

    result[name.toString()] = [{
      methods: getMethods(registry, methods),
      // We set the version to 0 here since it will not be relevant when we are grabbing the runtime apis
      // from the Metadata.
      version: 0
    }];
  }

  return Object.entries(result);
}

function runtimeSections (registry: Registry) {
  const sections = getRuntimeDefViaMetadata(registry);
  const all = [];

  for (let j = 0, jcount = sections.length; j < jcount; j++) {
    const [_section, secs] = sections[j];
    const sec = secs[0];

    const section = stringCamelCase(_section);
    const methods = Object.entries(sec.methods);

    const container: Section = { items: [], name: section };

    all.push(container);

    methods
      .sort(([a], [b]) => a.localeCompare(b))
      .forEach(([methodName, { description, params, type }]): void => {
        const args = params.map(({ name, type }): string => {
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          return name + ': `' + type + '`';
        }).join(', ');

        container.items.push({
          interface: '`' + `api.call.${stringCamelCase(section)}.${stringCamelCase(methodName)}` + '`',
          name: `${stringCamelCase(methodName)}(${args}): ${'`' + type + '`'}`,
          runtime: '`' + `${section}_${methodName}` + '`',
          summary: description
        });
      });
  }

  return all.sort(sortByName);
}

/** @internal */
function addRuntime (_runtimeDesc: string, registry: Registry): string {
  return renderPage({
    description: 'The following section contains known runtime calls that may be available on specific runtimes (depending on configuration and available pallets). These call directly into the WASM runtime for queries and operations.',
    sections: runtimeSections(registry),
    title: 'Runtime'
  });
}

/** @internal */
function addConstants (runtimeDesc: string, { lookup, pallets }: MetadataLatest): string {
  return renderPage({
    description: `The following sections contain the module constants, also known as parameter types. These can only be changed as part of a runtime upgrade. On the api, these are exposed via \`api.consts.<module>.<method>\`. ${headerFn(runtimeDesc)}`,
    sections: pallets
      .sort(sortByName)
      .filter(({ constants }) => !constants.isEmpty)
      .map(({ constants, name }) => {
        const sectionName = stringLowerFirst(name);

        return {
          items: constants
            .sort(sortByName)
            .map(({ docs, name, type }) => {
              const methodName = stringCamelCase(name);

              return {
                interface: '`' + `api.consts.${sectionName}.${methodName}` + '`',
                name: `${methodName}: ` + '`' + getSiName(lookup, type) + '`',
                ...(docs.length && { summary: docs })
              };
            }),
          name: sectionName
        };
      }),
    title: 'Constants'
  });
}

/** @internal */
function addStorage (runtimeDesc: string, { lookup, pallets, registry }: MetadataLatest): string {
  const { substrate } = getSubstrateStorage(registry);
  const moduleSections = pallets
    .sort(sortByName)
    .filter((moduleMetadata) => !moduleMetadata.storage.isNone)
    .map((moduleMetadata): Section => {
      const sectionName = stringLowerFirst(moduleMetadata.name);

      return {
        items: moduleMetadata.storage.unwrap().items
          .sort(sortByName)
          .map((func) => {
            let arg = '';

            if (func.type.isMap) {
              const { hashers, key } = func.type.asMap;

              arg = '`' + (
                hashers.length === 1
                  ? getSiName(lookup, key)
                  : lookup.getSiType(key).def.asTuple.map((t) => getSiName(lookup, t)).join(', ')
              ) + '`';
            }

            const methodName = stringLowerFirst(func.name);
            const outputType = unwrapStorageType(registry, func.type, func.modifier.isOptional);

            return {
              interface: '`' + `api.query.${sectionName}.${methodName}` + '`',
              name: `${methodName}(${arg}): ` + '`' + outputType + '`',
              ...(func.docs.length && { summary: func.docs })
            };
          }),
        name: sectionName
      };
    });

  return renderPage({
    description: `The following sections contain Storage methods are part of the ${runtimeDesc}. On the api, these are exposed via \`api.query.<module>.<method>\`. ${headerFn(runtimeDesc)}`,
    sections: moduleSections.concat([{
      description: 'These are well-known keys that are always available to the runtime implementation of any Substrate-based network.',
      items: Object.entries(substrate).map(([name, { meta }]) => {
        const arg = meta.type.isMap
          ? ('`' + getSiName(lookup, meta.type.asMap.key) + '`')
          : '';
        const methodName = stringLowerFirst(name);
        const outputType = unwrapStorageType(registry, meta.type, meta.modifier.isOptional);

        return {
          interface: '`' + `api.query.substrate.${methodName}` + '`',
          name: `${methodName}(${arg}): ` + '`' + outputType + '`',
          summary: meta.docs
        };
      }),
      name: 'substrate'
    }]).sort(sortByName),
    title: 'Storage'
  });
}

/** @internal */
function addExtrinsics (runtimeDesc: string, { lookup, pallets }: MetadataLatest): string {
  return renderPage({
    description: `The following sections contain Extrinsics methods are part of the ${runtimeDesc}. On the api, these are exposed via \`api.tx.<module>.<method>\`. ${headerFn(runtimeDesc)}`,
    sections: pallets
      .sort(sortByName)
      .filter(({ calls }) => calls.isSome)
      .map(({ calls, name }) => {
        const sectionName = stringCamelCase(name);

        return {
          items: lookup.getSiType(calls.unwrap().type).def.asVariant.variants
            .sort(sortByName)
            .map(({ docs, fields, name }, index) => {
              const methodName = stringCamelCase(name);
              const args = fields.map(({ name, type }) =>
                `${name.isSome ? name.toString() : `param${index}`}: ` + '`' + getSiName(lookup, type) + '`'
              ).join(', ');

              return {
                interface: '`' + `api.tx.${sectionName}.${methodName}` + '`',
                name: `${methodName}(${args})`,
                ...(docs.length && { summary: docs })
              };
            }),
          name: sectionName
        };
      }),
    title: 'Extrinsics'
  });
}

/** @internal */
function addEvents (runtimeDesc: string, { lookup, pallets }: MetadataLatest): string {
  return renderPage({
    description: `Events are emitted for certain operations on the runtime. The following sections describe the events that are part of the ${runtimeDesc}. ${headerFn(runtimeDesc)}`,
    sections: pallets
      .sort(sortByName)
      .filter(({ events }) => events.isSome)
      .map((meta) => ({
        items: lookup.getSiType(meta.events.unwrap().type).def.asVariant.variants
          .sort(sortByName)
          .map(({ docs, fields, name }) => {
            const methodName = name.toString();
            const args = fields.map(({ type }) =>
              '`' + getSiName(lookup, type) + '`'
            ).join(', ');

            return {
              interface: '`' + `api.events.${stringCamelCase(meta.name)}.${methodName}.is` + '`',
              name: `${methodName}(${args})`,
              ...(docs.length && { summary: docs })
            };
          }),
        name: stringCamelCase(meta.name)
      })),
    title: 'Events'
  });
}

/** @internal */
function addErrors (runtimeDesc: string, { lookup, pallets }: MetadataLatest): string {
  return renderPage({
    description: `This page lists the errors that can be encountered in the different modules. ${headerFn(runtimeDesc)}`,
    sections: pallets
      .sort(sortByName)
      .filter(({ errors }) => errors.isSome)
      .map((moduleMetadata) => ({
        items: lookup.getSiType(moduleMetadata.errors.unwrap().type).def.asVariant.variants
          .sort(sortByName)
          .map((error) => ({
            interface: '`' + `api.errors.${stringCamelCase(moduleMetadata.name)}.${error.name.toString()}.is` + '`',
            name: error.name.toString(),
            ...(error.docs.length && { summary: error.docs })
          })),
        name: stringLowerFirst(moduleMetadata.name)
      })),
    title: 'Errors'
  });
}

/** @internal */
function writeFile (name: string, ...chunks: any[]): void {
  const writeStream = fs.createWriteStream(name, { encoding: 'utf8', flags: 'w' });

  writeStream.on('finish', (): void => {
    console.log(`Completed writing ${name}`);
  });

  chunks.forEach((chunk): void => {
    writeStream.write(chunk);
  });

  writeStream.end();
}

interface ArgV { chain?: string; endpoint?: string; }

async function mainPromise (): Promise<void> {
  const { chain, endpoint } = yargs(hideBin(process.argv)).strict().options({
    chain: {
      description: 'The chain name to use for the output (defaults to "Substrate")',
      type: 'string'
    },
    endpoint: {
      description: 'The endpoint to connect to (e.g. wss://kusama-rpc.polkadot.io) or relative path to a file containing the JSON output of an RPC state_getMetadata call',
      type: 'string'
    }
  }).argv as ArgV;

  const chainName = chain || 'Substrate';
  let metaHex: HexString;
  let rpcMethods: string[] | undefined;

  if (endpoint) {
    if (endpoint.startsWith('wss://') || endpoint.startsWith('ws://')) {
      metaHex = await getMetadataViaWs(endpoint);
      rpcMethods = await getRpcMethodsViaWs(endpoint);
    } else {
      metaHex = (
        JSON.parse(
          fs.readFileSync(assertFile(path.join(process.cwd(), endpoint)), 'utf-8')
        ) as { result: HexString }
      ).result;

      if (!isHex(metaHex)) {
        throw new Error('Invalid metadata file');
      }
    }
  } else if (ALL_STATIC[chainName.toLowerCase()]) {
    metaHex = ALL_STATIC[chainName.toLowerCase()].meta;
    rpcMethods = ALL_STATIC[chainName.toLowerCase()].rpc?.methods;
  } else {
    metaHex = substrateMeta;
  }

  const registry = new TypeRegistry();
  const opaqueMetadata = registry.createType('Option<OpaqueMetadata>', registry.createType('Raw', metaHex).toU8a()).unwrap();
  const metadata = new Metadata(registry, opaqueMetadata.toHex());

  registry.setMetadata(metadata);

  const latest = metadata.asLatest;
  const runtimeDesc = `default ${chainName} runtime`;
  const docRoot = `docs/${chainName.toLowerCase()}`;

  writeFile(`${docRoot}/rpc.md`, addRpc(runtimeDesc, rpcMethods));

  writeFile(`${docRoot}/runtime.md`, addRuntime(runtimeDesc, registry));

  writeFile(`${docRoot}/constants.md`, addConstants(runtimeDesc, latest));
  writeFile(`${docRoot}/storage.md`, addStorage(runtimeDesc, latest));
  writeFile(`${docRoot}/extrinsics.md`, addExtrinsics(runtimeDesc, latest));
  writeFile(`${docRoot}/events.md`, addEvents(runtimeDesc, latest));
  writeFile(`${docRoot}/errors.md`, addErrors(runtimeDesc, latest));
}

export function main (): void {
  mainPromise().catch((error) => {
    console.error();
    console.error(error);
    console.error();
    process.exit(1);
  });
}
