/* eslint-disable */
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "travix.protobuf.catalog";

export interface Reference {
  entity: string;
  id: string;
}

export interface CatalogProviderModel {
  endpoint: string;
  /** can be set via CATALOG_KEY_ID env var */
  keyId: string;
  /** can be set via CATALOG_SECRET_KEY env var */
  secretKey: string;
}

function createBaseReference(): Reference {
  return { entity: "", id: "" };
}

export const Reference = {
  encode(message: Reference, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.entity !== "") {
      writer.uint32(10).string(message.entity);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reference {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReference();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.entity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Reference {
    return {
      entity: isSet(object.entity) ? globalThis.String(object.entity) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: Reference): unknown {
    const obj: any = {};
    if (message.entity !== "") {
      obj.entity = message.entity;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<Reference>): Reference {
    return Reference.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Reference>): Reference {
    const message = createBaseReference();
    message.entity = object.entity ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseCatalogProviderModel(): CatalogProviderModel {
  return { endpoint: "", keyId: "", secretKey: "" };
}

export const CatalogProviderModel = {
  encode(message: CatalogProviderModel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.endpoint !== "") {
      writer.uint32(10).string(message.endpoint);
    }
    if (message.keyId !== "") {
      writer.uint32(18).string(message.keyId);
    }
    if (message.secretKey !== "") {
      writer.uint32(26).string(message.secretKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CatalogProviderModel {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCatalogProviderModel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.endpoint = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.keyId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.secretKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CatalogProviderModel {
    return {
      endpoint: isSet(object.endpoint) ? globalThis.String(object.endpoint) : "",
      keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
      secretKey: isSet(object.secretKey) ? globalThis.String(object.secretKey) : "",
    };
  },

  toJSON(message: CatalogProviderModel): unknown {
    const obj: any = {};
    if (message.endpoint !== "") {
      obj.endpoint = message.endpoint;
    }
    if (message.keyId !== "") {
      obj.keyId = message.keyId;
    }
    if (message.secretKey !== "") {
      obj.secretKey = message.secretKey;
    }
    return obj;
  },

  create(base?: DeepPartial<CatalogProviderModel>): CatalogProviderModel {
    return CatalogProviderModel.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CatalogProviderModel>): CatalogProviderModel {
    const message = createBaseCatalogProviderModel();
    message.endpoint = object.endpoint ?? "";
    message.keyId = object.keyId ?? "";
    message.secretKey = object.secretKey ?? "";
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
