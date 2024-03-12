/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
import { Reference } from "./base.js";
import { Repository } from "./repository.js";

export const protobufPackage = "travix.protobuf.catalog";

export interface Codebase {
  description: string;
  name: string;
  id: string;
  owner: string;
  references: Reference[];
  repositories: Repository[];
  source: string;
}

function createBaseCodebase(): Codebase {
  return { description: "", name: "", id: "", owner: "", references: [], repositories: [], source: "" };
}

export const Codebase = {
  encode(message: Codebase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    for (const v of message.references) {
      Reference.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.repositories) {
      Repository.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(58).string(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Codebase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCodebase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.description = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.references.push(Reference.decode(reader, reader.uint32()));
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.repositories.push(Repository.decode(reader, reader.uint32()));
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): Codebase {
    return {
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      references: globalThis.Array.isArray(object?.references)
        ? object.references.map((e: any) => Reference.fromJSON(e))
        : [],
      repositories: globalThis.Array.isArray(object?.repositories)
        ? object.repositories.map((e: any) => Repository.fromJSON(e))
        : [],
      source: isSet(object.source) ? globalThis.String(object.source) : "",
    };
  },

  toJSON(message: Codebase): unknown {
    const obj: any = {};
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.references?.length) {
      obj.references = message.references.map((e) => Reference.toJSON(e));
    }
    if (message.repositories?.length) {
      obj.repositories = message.repositories.map((e) => Repository.toJSON(e));
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    return obj;
  },

  create(base?: DeepPartial<Codebase>): Codebase {
    return Codebase.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Codebase>): Codebase {
    const message = createBaseCodebase();
    message.description = object.description ?? "";
    message.name = object.name ?? "";
    message.id = object.id ?? "";
    message.owner = object.owner ?? "";
    message.references = object.references?.map((e) => Reference.fromPartial(e)) || [];
    message.repositories = object.repositories?.map((e) => Repository.fromPartial(e)) || [];
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
