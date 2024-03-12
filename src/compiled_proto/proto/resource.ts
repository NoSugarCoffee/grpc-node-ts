/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { Reference } from "./base.js";

export const protobufPackage = "travix.protobuf.catalog";

export interface Resource {
  alias: string;
  description: string;
  environment: string;
  id: string;
  name: string;
  owner: string;
  provider: string;
  references: Reference[];
  source: string;
  type: string;
}

export interface Resources {
  /** one of environment, provider or type is required */
  environment: string;
  /** one of provider, environment or type is required */
  provider: string;
  /** one of type, environment or provider is required */
  type: string;
  resources: Resource[];
  /** required for terraform ACC tests */
  id: string;
}

export interface GetResourceRequest {
  id: string;
  name: string;
}

export interface ListResourcesRequest {
  environment: string;
  provider: string;
  type: string;
}

export interface ListResourcesResponse {
  resources: Resource[];
}

function createBaseResource(): Resource {
  return {
    alias: "",
    description: "",
    environment: "",
    id: "",
    name: "",
    owner: "",
    provider: "",
    references: [],
    source: "",
    type: "",
  };
}

export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.alias !== "") {
      writer.uint32(10).string(message.alias);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.environment !== "") {
      writer.uint32(26).string(message.environment);
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
    if (message.provider !== "") {
      writer.uint32(58).string(message.provider);
    }
    for (const v of message.references) {
      Reference.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(74).string(message.source);
    }
    if (message.type !== "") {
      writer.uint32(82).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
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

          message.environment = reader.string();
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

          message.provider = reader.string();
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

  fromJSON(object: any): Resource {
    return {
      alias: isSet(object.alias) ? globalThis.String(object.alias) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      environment: isSet(object.environment) ? globalThis.String(object.environment) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      owner: isSet(object.owner) ? globalThis.String(object.owner) : "",
      provider: isSet(object.provider) ? globalThis.String(object.provider) : "",
      references: globalThis.Array.isArray(object?.references)
        ? object.references.map((e: any) => Reference.fromJSON(e))
        : [],
      source: isSet(object.source) ? globalThis.String(object.source) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
    };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    if (message.alias !== "") {
      obj.alias = message.alias;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.environment !== "") {
      obj.environment = message.environment;
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
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    if (message.references?.length) {
      obj.references = message.references.map((e) => Reference.toJSON(e));
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    return obj;
  },

  create(base?: DeepPartial<Resource>): Resource {
    return Resource.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = createBaseResource();
    message.alias = object.alias ?? "";
    message.description = object.description ?? "";
    message.environment = object.environment ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.owner = object.owner ?? "";
    message.provider = object.provider ?? "";
    message.references = object.references?.map((e) => Reference.fromPartial(e)) || [];
    message.source = object.source ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseResources(): Resources {
  return { environment: "", provider: "", type: "", resources: [], id: "" };
}

export const Resources = {
  encode(message: Resources, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.environment !== "") {
      writer.uint32(10).string(message.environment);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(42).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resources {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResources();
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

          message.provider = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.type = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Resources {
    return {
      environment: isSet(object.environment) ? globalThis.String(object.environment) : "",
      provider: isSet(object.provider) ? globalThis.String(object.provider) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: Resources): unknown {
    const obj: any = {};
    if (message.environment !== "") {
      obj.environment = message.environment;
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Resource.toJSON(e));
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<Resources>): Resources {
    return Resources.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Resources>): Resources {
    const message = createBaseResources();
    message.environment = object.environment ?? "";
    message.provider = object.provider ?? "";
    message.type = object.type ?? "";
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetResourceRequest(): GetResourceRequest {
  return { id: "", name: "" };
}

export const GetResourceRequest = {
  encode(message: GetResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetResourceRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetResourceRequest();
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

  fromJSON(object: any): GetResourceRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: GetResourceRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<GetResourceRequest>): GetResourceRequest {
    return GetResourceRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetResourceRequest>): GetResourceRequest {
    const message = createBaseGetResourceRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseListResourcesRequest(): ListResourcesRequest {
  return { environment: "", provider: "", type: "" };
}

export const ListResourcesRequest = {
  encode(message: ListResourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.environment !== "") {
      writer.uint32(10).string(message.environment);
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.type !== "") {
      writer.uint32(26).string(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourcesRequest();
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

          message.provider = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
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

  fromJSON(object: any): ListResourcesRequest {
    return {
      environment: isSet(object.environment) ? globalThis.String(object.environment) : "",
      provider: isSet(object.provider) ? globalThis.String(object.provider) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
    };
  },

  toJSON(message: ListResourcesRequest): unknown {
    const obj: any = {};
    if (message.environment !== "") {
      obj.environment = message.environment;
    }
    if (message.provider !== "") {
      obj.provider = message.provider;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    return obj;
  },

  create(base?: DeepPartial<ListResourcesRequest>): ListResourcesRequest {
    return ListResourcesRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListResourcesRequest>): ListResourcesRequest {
    const message = createBaseListResourcesRequest();
    message.environment = object.environment ?? "";
    message.provider = object.provider ?? "";
    message.type = object.type ?? "";
    return message;
  },
};

function createBaseListResourcesResponse(): ListResourcesResponse {
  return { resources: [] };
}

export const ListResourcesResponse = {
  encode(message: ListResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListResourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources.push(Resource.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListResourcesResponse {
    return {
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => Resource.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ListResourcesResponse): unknown {
    const obj: any = {};
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => Resource.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ListResourcesResponse>): ListResourcesResponse {
    return ListResourcesResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListResourcesResponse>): ListResourcesResponse {
    const message = createBaseListResourcesResponse();
    message.resources = object.resources?.map((e) => Resource.fromPartial(e)) || [];
    return message;
  },
};

export type ResourceServiceDefinition = typeof ResourceServiceDefinition;
export const ResourceServiceDefinition = {
  name: "ResourceService",
  fullName: "travix.protobuf.catalog.ResourceService",
  methods: {
    getResource: {
      name: "GetResource",
      requestType: GetResourceRequest,
      requestStream: false,
      responseType: Resource,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              43,
              90,
              24,
              18,
              22,
              47,
              114,
              101,
              115,
              111,
              117,
              114,
              99,
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
              15,
              47,
              114,
              101,
              115,
              111,
              117,
              114,
              99,
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
    listResources: {
      name: "ListResources",
      requestType: ListResourcesRequest,
      requestStream: false,
      responseType: ListResourcesResponse,
      responseStream: false,
      options: {
        _unknownFields: { 578365826: [new Uint8Array([12, 18, 10, 47, 114, 101, 115, 111, 117, 114, 99, 101, 115])] },
      },
    },
  },
} as const;

export interface ResourceServiceImplementation<CallContextExt = {}> {
  getResource(request: GetResourceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Resource>>;
  listResources(
    request: ListResourcesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListResourcesResponse>>;
}

export interface ResourceServiceClient<CallOptionsExt = {}> {
  getResource(request: DeepPartial<GetResourceRequest>, options?: CallOptions & CallOptionsExt): Promise<Resource>;
  listResources(
    request: DeepPartial<ListResourcesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListResourcesResponse>;
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
