/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
import { Reference } from "./base.js";

export const protobufPackage = "travix.protobuf.catalog";

export interface API {
  alias: string;
  definition: string;
  description: string;
  id: string;
  lifecycle: string;
  name: string;
  owner: string;
  references: Reference[];
  source: string;
  system: string;
  type: string;
}

function createBaseAPI(): API {
  return {
    alias: "",
    definition: "",
    description: "",
    id: "",
    lifecycle: "",
    name: "",
    owner: "",
    references: [],
    source: "",
    system: "",
    type: "",
  };
}

export const API = {
  encode(message: API, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    if (message.definition !== "") {
      writer.uint32(18).string(message.definition);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    if (message.lifecycle !== "") {
      writer.uint32(42).string(message.lifecycle);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(58).string(message.owner);
    }
    for (const v of message.references) {
      Reference.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(74).string(message.source);
    }
    if (message.system !== "") {
      writer.uint32(82).string(message.system);
    }
    if (message.type !== "") {
      writer.uint32(90).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): API {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAPI();
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

          message.definition = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
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

          message.name = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.owner = reader.string();
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

          message.source = reader.string();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): API {
    return {
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      definition: isSet(object.definition) ? globalThis.String(object.definition) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      lifecycle: isSet(object.lifecycle) ? globalThis.String(object.lifecycle) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      references: globalThis.Array.isArray(object?.references)
        ? object.references.map((e: any) => Reference.fromJSON(e))
        : [],
      source: isSet(object.source) ? globalThis.String(object.source) : "",
      system: isSet(object.system) ? globalThis.String(object.system) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
    };
  },

  toJSON(message: API): unknown {
    const obj: any = {};
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    if (message.definition !== "") {
      obj.definition = message.definition;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.lifecycle !== "") {
      obj.lifecycle = message.lifecycle;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.references?.length) {
      obj.references = message.references.map((e) => Reference.toJSON(e));
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.system !== "") {
      obj.system = message.system;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    return obj;
  },

  create(base?: DeepPartial<API>): API {
    return API.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<API>): API {
    const message = createBaseAPI();
    message.alias = object.alias ?? "";
    message.definition = object.definition ?? "";
    message.description = object.description ?? "";
    message.id = object.id ?? "";
    message.lifecycle = object.lifecycle ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.references = object.references?.map((e) => Reference.fromPartial(e)) || [];
    message.source = object.source ?? "";
    message.system = object.system ?? "";
    message.type = object.type ?? "";
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
