/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
import { Reference } from "./base.js";

export const protobufPackage = "travix.protobuf.catalog";

export interface System {
  alias: string;
  description: string;
  domain: string;
  id: string;
  name: string;
  owner: string;
  references: Reference[];
  source: string;
}

function createBaseSystem(): System {
  return { alias: "", description: "", domain: "", id: "", name: "", owner: "", references: [], source: "" };
}

export const System = {
  encode(message: System, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.domain !== "") {
      writer.uint32(26).string(message.domain);
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(50).string(message.owner);
    }
    for (const v of message.references) {
      Reference.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(66).string(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): System {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystem();
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

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.domain = reader.string();
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

          message.name = reader.string();
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

          message.references.push(Reference.decode(reader, reader.uint32()));
          continue;
        case 8:
          if (tag !== 66) {
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

  fromJSON(object: any): System {
    return {
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      domain: isSet(object.domain) ? globalThis.String(object.domain) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      references: globalThis.Array.isArray(object?.references)
        ? object.references.map((e: any) => Reference.fromJSON(e))
        : [],
      source: isSet(object.source) ? globalThis.String(object.source) : "",
    };
  },

  toJSON(message: System): unknown {
    const obj: any = {};
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.domain !== "") {
      obj.domain = message.domain;
    }
    if (message.id !== "") {
      obj.id = message.id;
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
    return obj;
  },

  create(base?: DeepPartial<System>): System {
    return System.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<System>): System {
    const message = createBaseSystem();
    message.alias = object.alias ?? "";
    message.description = object.description ?? "";
    message.domain = object.domain ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.references = object.references?.map((e) => Reference.fromPartial(e)) || [];
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
