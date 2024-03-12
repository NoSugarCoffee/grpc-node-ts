/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { Reference } from "./base.js";

export const protobufPackage = "travix.protobuf.catalog";

export interface Access {
  resource: string;
  permission: string;
}

export interface Repository {
  access: Access[];
  description: string;
  id: string;
  name: string;
  owner: string;
  visibility: string;
  references: Reference[];
  source: string;
}

export interface Repositories {
  owner: string;
  repositories: Repository[];
  /** required for terraform ACC tests */
  id: string;
}

export interface GetRepositoryRequest {
  id: string;
  name: string;
}

export interface ListRepositoryRequest {
  owner: string;
}

export interface ListRepositoryResponse {
  repositories: Repository[];
}

function createBaseAccess(): Access {
  return { resource: "", permission: "" };
}

export const Access = {
  encode(message: Access, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== "") {
      writer.uint32(10).string(message.resource);
    }
    if (message.permission !== "") {
      writer.uint32(26).string(message.permission);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Access {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resource = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permission = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Access {
    return {
      resource: isSet(object.resource) ? globalThis.String(object.resource) : "",
      permission: isSet(object.permission) ? globalThis.String(object.permission) : "",
    };
  },

  toJSON(message: Access): unknown {
    const obj: any = {};
    if (message.resource !== "") {
      obj.resource = message.resource;
    }
    if (message.permission !== "") {
      obj.permission = message.permission;
    }
    return obj;
  },

  create(base?: DeepPartial<Access>): Access {
    return Access.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Access>): Access {
    const message = createBaseAccess();
    message.resource = object.resource ?? "";
    message.permission = object.permission ?? "";
    return message;
  },
};

function createBaseRepository(): Repository {
  return { access: [], description: "", id: "", name: "", owner: "", visibility: "", references: [], source: "" };
}

export const Repository = {
  encode(message: Repository, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.access) {
      Access.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.owner !== "") {
      writer.uint32(42).string(message.owner);
    }
    if (message.visibility !== "") {
      writer.uint32(50).string(message.visibility);
    }
    for (const v of message.references) {
      Reference.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(66).string(message.source);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Repository {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepository();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.access.push(Access.decode(reader, reader.uint32()));
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

          message.id = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.visibility = reader.string();
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

  fromJSON(object: any): Repository {
    return {
      access: globalThis.Array.isArray(object?.access) ? object.access.map((e: any) => Access.fromJSON(e)) : [],
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      visibility: isSet(object.visibility) ? globalThis.String(object.visibility) : "",
      references: globalThis.Array.isArray(object?.references)
        ? object.references.map((e: any) => Reference.fromJSON(e))
        : [],
      source: isSet(object.source) ? globalThis.String(object.source) : "",
    };
  },

  toJSON(message: Repository): unknown {
    const obj: any = {};
    if (message.access?.length) {
      obj.access = message.access.map((e) => Access.toJSON(e));
    }
    if (message.description !== "") {
      obj.description = message.description;
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
    if (message.visibility !== "") {
      obj.visibility = message.visibility;
    }
    if (message.references?.length) {
      obj.references = message.references.map((e) => Reference.toJSON(e));
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    return obj;
  },

  create(base?: DeepPartial<Repository>): Repository {
    return Repository.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Repository>): Repository {
    const message = createBaseRepository();
    message.access = object.access?.map((e) => Access.fromPartial(e)) || [];
    message.description = object.description ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.visibility = object.visibility ?? "";
    message.references = object.references?.map((e) => Reference.fromPartial(e)) || [];
    message.source = object.source ?? "";
    return message;
  },
};

function createBaseRepositories(): Repositories {
  return { owner: "", repositories: [], id: "" };
}

export const Repositories = {
  encode(message: Repositories, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.repositories) {
      Repository.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Repositories {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepositories();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.repositories.push(Repository.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
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

  fromJSON(object: any): Repositories {
    return {
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      repositories: globalThis.Array.isArray(object?.repositories)
        ? object.repositories.map((e: any) => Repository.fromJSON(e))
        : [],
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: Repositories): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    if (message.repositories?.length) {
      obj.repositories = message.repositories.map((e) => Repository.toJSON(e));
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<Repositories>): Repositories {
    return Repositories.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Repositories>): Repositories {
    const message = createBaseRepositories();
    message.owner = object.owner ?? "";
    message.repositories = object.repositories?.map((e) => Repository.fromPartial(e)) || [];
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetRepositoryRequest(): GetRepositoryRequest {
  return { id: "", name: "" };
}

export const GetRepositoryRequest = {
  encode(message: GetRepositoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetRepositoryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetRepositoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetRepositoryRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: GetRepositoryRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetRepositoryRequest>): GetRepositoryRequest {
    return GetRepositoryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetRepositoryRequest>): GetRepositoryRequest {
    const message = createBaseGetRepositoryRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListRepositoryRequest(): ListRepositoryRequest {
  return { owner: "" };
}

export const ListRepositoryRequest = {
  encode(message: ListRepositoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRepositoryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRepositoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.owner = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRepositoryRequest {
    return { owner: isSet(object.owner) ? globalThis.String(object.owner) : "" };
  },

  toJSON(message: ListRepositoryRequest): unknown {
    const obj: any = {};
    if (message.owner !== "") {
      obj.owner = message.owner;
    }
    return obj;
  },

  create(base?: DeepPartial<ListRepositoryRequest>): ListRepositoryRequest {
    return ListRepositoryRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRepositoryRequest>): ListRepositoryRequest {
    const message = createBaseListRepositoryRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseListRepositoryResponse(): ListRepositoryResponse {
  return { repositories: [] };
}

export const ListRepositoryResponse = {
  encode(message: ListRepositoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.repositories) {
      Repository.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRepositoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRepositoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.repositories.push(Repository.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRepositoryResponse {
    return {
      repositories: globalThis.Array.isArray(object?.repositories)
        ? object.repositories.map((e: any) => Repository.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListRepositoryResponse): unknown {
    const obj: any = {};
    if (message.repositories?.length) {
      obj.repositories = message.repositories.map((e) => Repository.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ListRepositoryResponse>): ListRepositoryResponse {
    return ListRepositoryResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRepositoryResponse>): ListRepositoryResponse {
    const message = createBaseListRepositoryResponse();
    message.repositories = object.repositories?.map((e) => Repository.fromPartial(e)) || [];
    return message;
  },
};

export type RepositoryServiceDefinition = typeof RepositoryServiceDefinition;
export const RepositoryServiceDefinition = {
  name: "RepositoryService",
  fullName: "travix.protobuf.catalog.RepositoryService",
  methods: {
    getRepository: {
      name: "GetRepository",
      requestType: GetRepositoryRequest,
      requestStream: false,
      responseType: Repository,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              49,
              90,
              27,
              18,
              25,
              47,
              114,
              101,
              112,
              111,
              115,
              105,
              116,
              111,
              114,
              105,
              101,
              115,
              47,
              110,
              97,
              109,
              101,
              47,
              123,
              110,
              97,
              109,
              101,
              125,
              18,
              18,
              47,
              114,
              101,
              112,
              111,
              115,
              105,
              116,
              111,
              114,
              105,
              101,
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
    listRepositories: {
      name: "ListRepositories",
      requestType: ListRepositoryRequest,
      requestStream: false,
      responseType: ListRepositoryResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [new Uint8Array([15, 18, 13, 47, 114, 101, 112, 111, 115, 105, 116, 111, 114, 105, 101, 115])],
        },
      },
    },
  },
} as const;

export interface RepositoryServiceImplementation<CallContextExt = {}> {
  getRepository(request: GetRepositoryRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Repository>>;
  listRepositories(
    request: ListRepositoryRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListRepositoryResponse>>;
}

export interface RepositoryServiceClient<CallOptionsExt = {}> {
  getRepository(
    request: DeepPartial<GetRepositoryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Repository>;
  listRepositories(
    request: DeepPartial<ListRepositoryRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListRepositoryResponse>;
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
