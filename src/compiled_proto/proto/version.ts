/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";

export const protobufPackage = "travix.protobuf.catalog";

export interface Version {
  version: string;
  commit: string;
  catalog: string;
}

export interface GetVersionRequest {
}

function createBaseVersion(): Version {
  return { version: "", commit: "", catalog: "" };
}

export const Version = {
  encode(message: Version, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.commit !== "") {
      writer.uint32(18).string(message.commit);
    }
    if (message.catalog !== "") {
      writer.uint32(26).string(message.catalog);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Version {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.version = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.commit = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.catalog = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Version {
    return {
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      commit: isSet(object.commit) ? globalThis.String(object.commit) : "",
      catalog: isSet(object.catalog) ? globalThis.String(object.catalog) : "",
    };
  },

  toJSON(message: Version): unknown {
    const obj: any = {};
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.commit !== "") {
      obj.commit = message.commit;
    }
    if (message.catalog !== "") {
      obj.catalog = message.catalog;
    }
    return obj;
  },

  create(base?: DeepPartial<Version>): Version {
    return Version.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Version>): Version {
    const message = createBaseVersion();
    message.version = object.version ?? "";
    message.commit = object.commit ?? "";
    message.catalog = object.catalog ?? "";
    return message;
  },
};

function createBaseGetVersionRequest(): GetVersionRequest {
  return {};
}

export const GetVersionRequest = {
  encode(_: GetVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetVersionRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetVersionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GetVersionRequest {
    return {};
  },

  toJSON(_: GetVersionRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<GetVersionRequest>): GetVersionRequest {
    return GetVersionRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<GetVersionRequest>): GetVersionRequest {
    const message = createBaseGetVersionRequest();
    return message;
  },
};

export type VersionServiceDefinition = typeof VersionServiceDefinition;
export const VersionServiceDefinition = {
  name: "VersionService",
  fullName: "travix.protobuf.catalog.VersionService",
  methods: {
    getVersion: {
      name: "GetVersion",
      requestType: GetVersionRequest,
      requestStream: false,
      responseType: Version,
      responseStream: false,
      options: { _unknownFields: { 578365826: [new Uint8Array([10, 18, 8, 47, 118, 101, 114, 115, 105, 111, 110])] } },
    },
  },
} as const;

export interface VersionServiceImplementation<CallContextExt = {}> {
  getVersion(request: GetVersionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Version>>;
}

export interface VersionServiceClient<CallOptionsExt = {}> {
  getVersion(request: DeepPartial<GetVersionRequest>, options?: CallOptions & CallOptionsExt): Promise<Version>;
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
