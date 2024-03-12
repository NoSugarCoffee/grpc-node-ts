/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "travix.protobuf.catalog";

export interface RepoAccess {
  id: string;
  permission: string;
  projectId: string;
}

export interface RepoAccesses {
  accesses: RepoAccess[];
  repository: string;
  environment: string;
  /** required for terraform ACC tests */
  id: string;
}

export interface ListRepoAccessRequest {
  environment?: string | undefined;
  repository?: string | undefined;
}

export interface ListRepoAccessResponse {
  accesses: RepoAccess[];
}

function createBaseRepoAccess(): RepoAccess {
  return { id: "", permission: "", projectId: "" };
}

export const RepoAccess = {
  encode(message: RepoAccess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.permission !== "") {
      writer.uint32(18).string(message.permission);
    }
    if (message.projectId !== "") {
      writer.uint32(26).string(message.projectId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RepoAccess {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepoAccess();
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

          message.permission = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.projectId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RepoAccess {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      permission: isSet(object.permission) ? globalThis.String(object.permission) : "",
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
    };
  },

  toJSON(message: RepoAccess): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.permission !== "") {
      obj.permission = message.permission;
    }
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    return obj;
  },

  create(base?: DeepPartial<RepoAccess>): RepoAccess {
    return RepoAccess.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RepoAccess>): RepoAccess {
    const message = createBaseRepoAccess();
    message.id = object.id ?? "";
    message.permission = object.permission ?? "";
    message.projectId = object.projectId ?? "";
    return message;
  },
};

function createBaseRepoAccesses(): RepoAccesses {
  return { accesses: [], repository: "", environment: "", id: "" };
}

export const RepoAccesses = {
  encode(message: RepoAccesses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accesses) {
      RepoAccess.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.repository !== "") {
      writer.uint32(18).string(message.repository);
    }
    if (message.environment !== "") {
      writer.uint32(26).string(message.environment);
    }
    if (message.id !== "") {
      writer.uint32(42).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RepoAccesses {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRepoAccesses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accesses.push(RepoAccess.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.repository = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.environment = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
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

  fromJSON(object: any): RepoAccesses {
    return {
      accesses: globalThis.Array.isArray(object?.accesses)
        ? object.accesses.map((e: any) => RepoAccess.fromJSON(e))
        : [],
      repository: isSet(object.repository) ? globalThis.String(object.repository) : "",
      environment: isSet(object.environment) ? globalThis.String(object.environment) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: RepoAccesses): unknown {
    const obj: any = {};
    if (message.accesses?.length) {
      obj.accesses = message.accesses.map((e) => RepoAccess.toJSON(e));
    }
    if (message.repository !== "") {
      obj.repository = message.repository;
    }
    if (message.environment !== "") {
      obj.environment = message.environment;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<RepoAccesses>): RepoAccesses {
    return RepoAccesses.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RepoAccesses>): RepoAccesses {
    const message = createBaseRepoAccesses();
    message.accesses = object.accesses?.map((e) => RepoAccess.fromPartial(e)) || [];
    message.repository = object.repository ?? "";
    message.environment = object.environment ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseListRepoAccessRequest(): ListRepoAccessRequest {
  return { environment: undefined, repository: undefined };
}

export const ListRepoAccessRequest = {
  encode(message: ListRepoAccessRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.environment !== undefined) {
      writer.uint32(10).string(message.environment);
    }
    if (message.repository !== undefined) {
      writer.uint32(18).string(message.repository);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRepoAccessRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRepoAccessRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.environment = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
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

  fromJSON(object: any): ListRepoAccessRequest {
    return {
      environment: isSet(object.environment) ? globalThis.String(object.environment) : undefined,
      repository: isSet(object.repository) ? globalThis.String(object.repository) : undefined,
    };
  },

  toJSON(message: ListRepoAccessRequest): unknown {
    const obj: any = {};
    if (message.environment !== undefined) {
      obj.environment = message.environment;
    }
    if (message.repository !== undefined) {
      obj.repository = message.repository;
    }
    return obj;
  },

  create(base?: DeepPartial<ListRepoAccessRequest>): ListRepoAccessRequest {
    return ListRepoAccessRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRepoAccessRequest>): ListRepoAccessRequest {
    const message = createBaseListRepoAccessRequest();
    message.environment = object.environment ?? undefined;
    message.repository = object.repository ?? undefined;
    return message;
  },
};

function createBaseListRepoAccessResponse(): ListRepoAccessResponse {
  return { accesses: [] };
}

export const ListRepoAccessResponse = {
  encode(message: ListRepoAccessResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accesses) {
      RepoAccess.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListRepoAccessResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListRepoAccessResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accesses.push(RepoAccess.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListRepoAccessResponse {
    return {
      accesses: globalThis.Array.isArray(object?.accesses)
        ? object.accesses.map((e: any) => RepoAccess.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListRepoAccessResponse): unknown {
    const obj: any = {};
    if (message.accesses?.length) {
      obj.accesses = message.accesses.map((e) => RepoAccess.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ListRepoAccessResponse>): ListRepoAccessResponse {
    return ListRepoAccessResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListRepoAccessResponse>): ListRepoAccessResponse {
    const message = createBaseListRepoAccessResponse();
    message.accesses = object.accesses?.map((e) => RepoAccess.fromPartial(e)) || [];
    return message;
  },
};

export type RepoAccessServiceDefinition = typeof RepoAccessServiceDefinition;
export const RepoAccessServiceDefinition = {
  name: "RepoAccessService",
  fullName: "travix.protobuf.catalog.RepoAccessService",
  methods: {
    listRepoAccess: {
      name: "ListRepoAccess",
      requestType: ListRepoAccessRequest,
      requestStream: false,
      responseType: ListRepoAccessResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [new Uint8Array([16, 18, 14, 47, 114, 101, 112, 111, 45, 97, 99, 99, 101, 115, 115, 101, 115])],
        },
      },
    },
  },
} as const;

export interface RepoAccessServiceImplementation<CallContextExt = {}> {
  listRepoAccess(
    request: ListRepoAccessRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListRepoAccessResponse>>;
}

export interface RepoAccessServiceClient<CallOptionsExt = {}> {
  listRepoAccess(
    request: DeepPartial<ListRepoAccessRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListRepoAccessResponse>;
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
