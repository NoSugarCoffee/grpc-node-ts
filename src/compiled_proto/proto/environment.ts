/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { Reference } from "./base.js";

export const protobufPackage = "travix.protobuf.catalog";

export interface Environment {
  description: string;
  id: string;
  name: string;
  protection: string;
  references: Reference[];
  source: string;
  target: string;
}

export interface Environments {
  environments: Environment[];
  /** required for terraform ACC tests */
  id: string;
  repository: string;
}

export interface GetEnvironmentRequest {
  id: string;
}

export interface ListEnvironmentRequest {
  repository?: string | undefined;
}

export interface ListEnvironmentResponse {
  environments: Environment[];
}

function createBaseEnvironment(): Environment {
  return { description: "", id: "", name: "", protection: "", references: [], source: "", target: "" };
}

export const Environment = {
  encode(message: Environment, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.protection !== "") {
      writer.uint32(34).string(message.protection);
    }
    for (const v of message.references) {
      Reference.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(50).string(message.source);
    }
    if (message.target !== "") {
      writer.uint32(58).string(message.target);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Environment {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvironment();
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

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.protection = reader.string();
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

          message.source = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.target = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Environment {
    return {
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      protection: isSet(object.protection) ? globalThis.String(object.protection) : "",
      references: globalThis.Array.isArray(object?.references)
        ? object.references.map((e: any) => Reference.fromJSON(e))
        : [],
      source: isSet(object.source) ? globalThis.String(object.source) : "",
      target: isSet(object.target) ? globalThis.String(object.target) : "",
    };
  },

  toJSON(message: Environment): unknown {
    const obj: any = {};
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.protection !== "") {
      obj.protection = message.protection;
    }
    if (message.references?.length) {
      obj.references = message.references.map((e) => Reference.toJSON(e));
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.target !== "") {
      obj.target = message.target;
    }
    return obj;
  },

  create(base?: DeepPartial<Environment>): Environment {
    return Environment.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Environment>): Environment {
    const message = createBaseEnvironment();
    message.description = object.description ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.protection = object.protection ?? "";
    message.references = object.references?.map((e) => Reference.fromPartial(e)) || [];
    message.source = object.source ?? "";
    message.target = object.target ?? "";
    return message;
  },
};

function createBaseEnvironments(): Environments {
  return { environments: [], id: "", repository: "" };
}

export const Environments = {
  encode(message: Environments, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.environments) {
      Environment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.repository !== "") {
      writer.uint32(26).string(message.repository);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Environments {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEnvironments();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.environments.push(Environment.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.repository = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Environments {
    return {
      environments: globalThis.Array.isArray(object?.environments)
        ? object.environments.map((e: any) => Environment.fromJSON(e))
        : [],
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      repository: isSet(object.repository) ? globalThis.String(object.repository) : "",
    };
  },

  toJSON(message: Environments): unknown {
    const obj: any = {};
    if (message.environments?.length) {
      obj.environments = message.environments.map((e) => Environment.toJSON(e));
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.repository !== "") {
      obj.repository = message.repository;
    }
    return obj;
  },

  create(base?: DeepPartial<Environments>): Environments {
    return Environments.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Environments>): Environments {
    const message = createBaseEnvironments();
    message.environments = object.environments?.map((e) => Environment.fromPartial(e)) || [];
    message.id = object.id ?? "";
    message.repository = object.repository ?? "";
    return message;
  },
};

function createBaseGetEnvironmentRequest(): GetEnvironmentRequest {
  return { id: "" };
}

export const GetEnvironmentRequest = {
  encode(message: GetEnvironmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetEnvironmentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetEnvironmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
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

  fromJSON(object: any): GetEnvironmentRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetEnvironmentRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<GetEnvironmentRequest>): GetEnvironmentRequest {
    return GetEnvironmentRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetEnvironmentRequest>): GetEnvironmentRequest {
    const message = createBaseGetEnvironmentRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseListEnvironmentRequest(): ListEnvironmentRequest {
  return { repository: undefined };
}

export const ListEnvironmentRequest = {
  encode(message: ListEnvironmentRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.repository !== undefined) {
      writer.uint32(10).string(message.repository);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListEnvironmentRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListEnvironmentRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.repository = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListEnvironmentRequest {
    return { repository: isSet(object.repository) ? globalThis.String(object.repository) : undefined };
  },

  toJSON(message: ListEnvironmentRequest): unknown {
    const obj: any = {};
    if (message.repository !== undefined) {
      obj.repository = message.repository;
    }
    return obj;
  },

  create(base?: DeepPartial<ListEnvironmentRequest>): ListEnvironmentRequest {
    return ListEnvironmentRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListEnvironmentRequest>): ListEnvironmentRequest {
    const message = createBaseListEnvironmentRequest();
    message.repository = object.repository ?? undefined;
    return message;
  },
};

function createBaseListEnvironmentResponse(): ListEnvironmentResponse {
  return { environments: [] };
}

export const ListEnvironmentResponse = {
  encode(message: ListEnvironmentResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.environments) {
      Environment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListEnvironmentResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListEnvironmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.environments.push(Environment.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListEnvironmentResponse {
    return {
      environments: globalThis.Array.isArray(object?.environments)
        ? object.environments.map((e: any) => Environment.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListEnvironmentResponse): unknown {
    const obj: any = {};
    if (message.environments?.length) {
      obj.environments = message.environments.map((e) => Environment.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ListEnvironmentResponse>): ListEnvironmentResponse {
    return ListEnvironmentResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListEnvironmentResponse>): ListEnvironmentResponse {
    const message = createBaseListEnvironmentResponse();
    message.environments = object.environments?.map((e) => Environment.fromPartial(e)) || [];
    return message;
  },
};

export type EnvironmentServiceDefinition = typeof EnvironmentServiceDefinition;
export const EnvironmentServiceDefinition = {
  name: "EnvironmentService",
  fullName: "travix.protobuf.catalog.EnvironmentService",
  methods: {
    getEnvironment: {
      name: "GetEnvironment",
      requestType: GetEnvironmentRequest,
      requestStream: false,
      responseType: Environment,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              20,
              18,
              18,
              47,
              101,
              110,
              118,
              105,
              114,
              111,
              110,
              109,
              101,
              110,
              116,
              115,
              47,
              123,
              105,
              100,
              125,
            ]),
          ],
        },
      },
    },
    listEnvironment: {
      name: "ListEnvironment",
      requestType: ListEnvironmentRequest,
      requestStream: false,
      responseType: ListEnvironmentResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [new Uint8Array([15, 18, 13, 47, 101, 110, 118, 105, 114, 111, 110, 109, 101, 110, 116, 115])],
        },
      },
    },
  },
} as const;

export interface EnvironmentServiceImplementation<CallContextExt = {}> {
  getEnvironment(
    request: GetEnvironmentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Environment>>;
  listEnvironment(
    request: ListEnvironmentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListEnvironmentResponse>>;
}

export interface EnvironmentServiceClient<CallOptionsExt = {}> {
  getEnvironment(
    request: DeepPartial<GetEnvironmentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Environment>;
  listEnvironment(
    request: DeepPartial<ListEnvironmentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListEnvironmentResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
