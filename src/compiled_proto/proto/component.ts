/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
import { Reference } from "./base.js";

export const protobufPackage = "travix.protobuf.catalog";

export interface Component {
  alias: string;
  consumesApis: string[];
  dependsOn: string[];
  id: string;
  lifecycle: string;
  owner: string;
  providesApis: string[];
  references: Reference[];
  subcomponentOf: string[];
  system: string;
  type: string;
  description: string;
  name: string;
  source: string;
}

function createBaseComponent(): Component {
  return {
    alias: "",
    consumesApis: [],
    dependsOn: [],
    id: "",
    lifecycle: "",
    owner: "",
    providesApis: [],
    references: [],
    subcomponentOf: [],
    system: "",
    type: "",
    description: "",
    name: "",
    source: "",
  };
}

export const Component = {
  encode(message: Component, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    for (const v of message.consumesApis) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.dependsOn) {
      writer.uint32(26).string(v!);
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    if (message.lifecycle !== "") {
      writer.uint32(42).string(message.lifecycle);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    for (const v of message.providesApis) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.references) {
      Reference.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.subcomponentOf) {
      writer.uint32(74).string(v!);
    }
    if (message.system !== "") {
      writer.uint32(82).string(message.system);
    }
    if (message.type !== "") {
      writer.uint32(90).string(message.type);
    }
    if (message.description !== "") {
      writer.uint32(98).string(message.description);
    }
    if (message.name !== "") {
      writer.uint32(106).string(message.name);
    }
    if (message.source !== "") {
      writer.uint32(114).string(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Component {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComponent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.alias = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.consumesApis.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.dependsOn.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.id = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.lifecycle = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.providesApis.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.references.push(Reference.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.subcomponentOf.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.system = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.type = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.description = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.name = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.source = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Component {
    return {
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      consumesApis: globalThis.Array.isArray(object?.consumesApis)
        ? object.consumesApis.map((e: any) => globalThis.String(e))
        : [],
      dependsOn: globalThis.Array.isArray(object?.dependsOn)
        ? object.dependsOn.map((e: any) => globalThis.String(e))
        : [],
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      lifecycle: isSet(object.lifecycle) ? globalThis.String(object.lifecycle) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      providesApis: globalThis.Array.isArray(object?.providesApis)
        ? object.providesApis.map((e: any) => globalThis.String(e))
        : [],
      references: globalThis.Array.isArray(object?.references)
        ? object.references.map((e: any) => Reference.fromJSON(e))
        : [],
      subcomponentOf: globalThis.Array.isArray(object?.subcomponentOf)
        ? object.subcomponentOf.map((e: any) => globalThis.String(e))
        : [],
      system: isSet(object.system) ? globalThis.String(object.system) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      source: isSet(object.source) ? globalThis.String(object.source) : "",
    };
  },

  toJSON(message: Component): unknown {
    const obj: any = {};
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    if (message.consumesApis?.length) {
      obj.consumesApis = message.consumesApis;
    }
    if (message.dependsOn?.length) {
      obj.dependsOn = message.dependsOn;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.lifecycle !== "") {
      obj.lifecycle = message.lifecycle;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.providesApis?.length) {
      obj.providesApis = message.providesApis;
    }
    if (message.references?.length) {
      obj.references = message.references.map((e) => Reference.toJSON(e));
    }
    if (message.subcomponentOf?.length) {
      obj.subcomponentOf = message.subcomponentOf;
    }
    if (message.system !== "") {
      obj.system = message.system;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    return obj;
  },

  create(base?: DeepPartial<Component>): Component {
    return Component.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Component>): Component {
    const message = createBaseComponent();
    message.alias = object.alias ?? "";
    message.consumesApis = object.consumesApis?.map((e) => e) || [];
    message.dependsOn = object.dependsOn?.map((e) => e) || [];
    message.id = object.id ?? "";
    message.lifecycle = object.lifecycle ?? "";
    message.owner = object.owner ?? "";
    message.providesApis = object.providesApis?.map((e) => e) || [];
    message.references = object.references?.map((e) => Reference.fromPartial(e)) || [];
    message.subcomponentOf = object.subcomponentOf?.map((e) => e) || [];
    message.system = object.system ?? "";
    message.type = object.type ?? "";
    message.description = object.description ?? "";
    message.name = object.name ?? "";
    message.source = object.source ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
