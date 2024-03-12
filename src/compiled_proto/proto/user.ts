/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { Reference } from "./base.js";

export const protobufPackage = "travix.protobuf.catalog";

export interface User {
  description: string;
  displayName: string;
  /** at most one from email, name, gitHubLogin must be set */
  email: string;
  /** at most one from gitHubLogin, email, name must be set */
  gitHubLogin: string;
  gitHubOrgs: string[];
  gitHubRole: string;
  id: string;
  /** at most one from name, email, gitHubLogin must be set */
  name: string;
  references: Reference[];
  source: string;
  travixLocation: string;
  travixRole: string;
  travixTechnologies: string[];
  travixExternal: boolean;
  travixProductOwner: boolean;
}

export interface Users {
  /** one of group, gitHubOrg, gitHubRole must be set */
  group: string;
  /** one of gitHubOrg, groud, gitHubRole must be set */
  gitHubOrg: string;
  /** one of githubRole, gitHubOrg, group must be set */
  gitHubRole: string;
  users: User[];
  /** required for terraform ACC tests */
  id: string;
}

export interface GetUserRequest {
  id: string;
  email: string;
  name: string;
  gitHubLogin: string;
}

export interface ListUserRequest {
  group: string;
  gitHubOrg: string;
  gitHubRole: string;
}

export interface ListUserResponse {
  users: User[];
}

function createBaseUser(): User {
  return {
    description: "",
    displayName: "",
    email: "",
    gitHubLogin: "",
    gitHubOrgs: [],
    gitHubRole: "",
    id: "",
    name: "",
    references: [],
    source: "",
    travixLocation: "",
    travixRole: "",
    travixTechnologies: [],
    travixExternal: false,
    travixProductOwner: false,
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.gitHubLogin !== "") {
      writer.uint32(34).string(message.gitHubLogin);
    }
    for (const v of message.gitHubOrgs) {
      writer.uint32(42).string(v!);
    }
    if (message.gitHubRole !== "") {
      writer.uint32(50).string(message.gitHubRole);
    }
    if (message.id !== "") {
      writer.uint32(58).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(66).string(message.name);
    }
    for (const v of message.references) {
      Reference.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.source !== "") {
      writer.uint32(82).string(message.source);
    }
    if (message.travixLocation !== "") {
      writer.uint32(90).string(message.travixLocation);
    }
    if (message.travixRole !== "") {
      writer.uint32(98).string(message.travixRole);
    }
    for (const v of message.travixTechnologies) {
      writer.uint32(106).string(v!);
    }
    if (message.travixExternal === true) {
      writer.uint32(112).bool(message.travixExternal);
    }
    if (message.travixProductOwner === true) {
      writer.uint32(120).bool(message.travixProductOwner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
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

          message.displayName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.gitHubLogin = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.gitHubOrgs.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.gitHubRole = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.id = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.name = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.references.push(Reference.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.source = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.travixLocation = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.travixRole = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.travixTechnologies.push(reader.string());
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.travixExternal = reader.bool();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.travixProductOwner = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      gitHubLogin: isSet(object.gitHubLogin) ? globalThis.String(object.gitHubLogin) : "",
      gitHubOrgs: globalThis.Array.isArray(object?.gitHubOrgs)
        ? object.gitHubOrgs.map((e: any) => globalThis.String(e))
        : [],
      gitHubRole: isSet(object.gitHubRole) ? globalThis.String(object.gitHubRole) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      references: globalThis.Array.isArray(object?.references)
        ? object.references.map((e: any) => Reference.fromJSON(e))
        : [],
      source: isSet(object.source) ? globalThis.String(object.source) : "",
      travixLocation: isSet(object.travixLocation) ? globalThis.String(object.travixLocation) : "",
      travixRole: isSet(object.travixRole) ? globalThis.String(object.travixRole) : "",
      travixTechnologies: globalThis.Array.isArray(object?.travixTechnologies)
        ? object.travixTechnologies.map((e: any) => globalThis.String(e))
        : [],
      travixExternal: isSet(object.travixExternal) ? globalThis.Boolean(object.travixExternal) : false,
      travixProductOwner: isSet(object.travixProductOwner) ? globalThis.Boolean(object.travixProductOwner) : false,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.displayName !== "") {
      obj.displayName = message.displayName;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.gitHubLogin !== "") {
      obj.gitHubLogin = message.gitHubLogin;
    }
    if (message.gitHubOrgs?.length) {
      obj.gitHubOrgs = message.gitHubOrgs;
    }
    if (message.gitHubRole !== "") {
      obj.gitHubRole = message.gitHubRole;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.references?.length) {
      obj.references = message.references.map((e) => Reference.toJSON(e));
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.travixLocation !== "") {
      obj.travixLocation = message.travixLocation;
    }
    if (message.travixRole !== "") {
      obj.travixRole = message.travixRole;
    }
    if (message.travixTechnologies?.length) {
      obj.travixTechnologies = message.travixTechnologies;
    }
    if (message.travixExternal === true) {
      obj.travixExternal = message.travixExternal;
    }
    if (message.travixProductOwner === true) {
      obj.travixProductOwner = message.travixProductOwner;
    }
    return obj;
  },

  create(base?: DeepPartial<User>): User {
    return User.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<User>): User {
    const message = createBaseUser();
    message.description = object.description ?? "";
    message.displayName = object.displayName ?? "";
    message.email = object.email ?? "";
    message.gitHubLogin = object.gitHubLogin ?? "";
    message.gitHubOrgs = object.gitHubOrgs?.map((e) => e) || [];
    message.gitHubRole = object.gitHubRole ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.references = object.references?.map((e) => Reference.fromPartial(e)) || [];
    message.source = object.source ?? "";
    message.travixLocation = object.travixLocation ?? "";
    message.travixRole = object.travixRole ?? "";
    message.travixTechnologies = object.travixTechnologies?.map((e) => e) || [];
    message.travixExternal = object.travixExternal ?? false;
    message.travixProductOwner = object.travixProductOwner ?? false;
    return message;
  },
};

function createBaseUsers(): Users {
  return { group: "", gitHubOrg: "", gitHubRole: "", users: [], id: "" };
}

export const Users = {
  encode(message: Users, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== "") {
      writer.uint32(10).string(message.group);
    }
    if (message.gitHubOrg !== "") {
      writer.uint32(18).string(message.gitHubOrg);
    }
    if (message.gitHubRole !== "") {
      writer.uint32(26).string(message.gitHubRole);
    }
    for (const v of message.users) {
      User.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(42).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Users {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUsers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gitHubOrg = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gitHubRole = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
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

  fromJSON(object: any): Users {
    return {
      group: isSet(object.group) ? globalThis.String(object.group) : "",
      gitHubOrg: isSet(object.gitHubOrg) ? globalThis.String(object.gitHubOrg) : "",
      gitHubRole: isSet(object.gitHubRole) ? globalThis.String(object.gitHubRole) : "",
      users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [],
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: Users): unknown {
    const obj: any = {};
    if (message.group !== "") {
      obj.group = message.group;
    }
    if (message.gitHubOrg !== "") {
      obj.gitHubOrg = message.gitHubOrg;
    }
    if (message.gitHubRole !== "") {
      obj.gitHubRole = message.gitHubRole;
    }
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<Users>): Users {
    return Users.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Users>): Users {
    const message = createBaseUsers();
    message.group = object.group ?? "";
    message.gitHubOrg = object.gitHubOrg ?? "";
    message.gitHubRole = object.gitHubRole ?? "";
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetUserRequest(): GetUserRequest {
  return { id: "", email: "", name: "", gitHubLogin: "" };
}

export const GetUserRequest = {
  encode(message: GetUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.gitHubLogin !== "") {
      writer.uint32(34).string(message.gitHubLogin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRequest();
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

          message.email = reader.string();
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

          message.gitHubLogin = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      gitHubLogin: isSet(object.gitHubLogin) ? globalThis.String(object.gitHubLogin) : "",
    };
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.gitHubLogin !== "") {
      obj.gitHubLogin = message.gitHubLogin;
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserRequest>): GetUserRequest {
    return GetUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserRequest>): GetUserRequest {
    const message = createBaseGetUserRequest();
    message.id = object.id ?? "";
    message.email = object.email ?? "";
    message.name = object.name ?? "";
    message.gitHubLogin = object.gitHubLogin ?? "";
    return message;
  },
};

function createBaseListUserRequest(): ListUserRequest {
  return { group: "", gitHubOrg: "", gitHubRole: "" };
}

export const ListUserRequest = {
  encode(message: ListUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.group !== "") {
      writer.uint32(10).string(message.group);
    }
    if (message.gitHubOrg !== "") {
      writer.uint32(18).string(message.gitHubOrg);
    }
    if (message.gitHubRole !== "") {
      writer.uint32(26).string(message.gitHubRole);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.group = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.gitHubOrg = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gitHubRole = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListUserRequest {
    return {
      group: isSet(object.group) ? globalThis.String(object.group) : "",
      gitHubOrg: isSet(object.gitHubOrg) ? globalThis.String(object.gitHubOrg) : "",
      gitHubRole: isSet(object.gitHubRole) ? globalThis.String(object.gitHubRole) : "",
    };
  },

  toJSON(message: ListUserRequest): unknown {
    const obj: any = {};
    if (message.group !== "") {
      obj.group = message.group;
    }
    if (message.gitHubOrg !== "") {
      obj.gitHubOrg = message.gitHubOrg;
    }
    if (message.gitHubRole !== "") {
      obj.gitHubRole = message.gitHubRole;
    }
    return obj;
  },

  create(base?: DeepPartial<ListUserRequest>): ListUserRequest {
    return ListUserRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListUserRequest>): ListUserRequest {
    const message = createBaseListUserRequest();
    message.group = object.group ?? "";
    message.gitHubOrg = object.gitHubOrg ?? "";
    message.gitHubRole = object.gitHubRole ?? "";
    return message;
  },
};

function createBaseListUserResponse(): ListUserResponse {
  return { users: [] };
}

export const ListUserResponse = {
  encode(message: ListUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListUserResponse {
    return { users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: ListUserResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ListUserResponse>): ListUserResponse {
    return ListUserResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListUserResponse>): ListUserResponse {
    const message = createBaseListUserResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

export type UserServiceDefinition = typeof UserServiceDefinition;
export const UserServiceDefinition = {
  name: "UserService",
  fullName: "travix.protobuf.catalog.UserService",
  methods: {
    getUser: {
      name: "GetUser",
      requestType: GetUserRequest,
      requestStream: false,
      responseType: User,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              31,
              90,
              16,
              18,
              14,
              47,
              117,
              115,
              101,
              114,
              115,
              47,
              95,
              115,
              101,
              97,
              114,
              99,
              104,
              18,
              11,
              47,
              117,
              115,
              101,
              114,
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
    listUsers: {
      name: "ListUsers",
      requestType: ListUserRequest,
      requestStream: false,
      responseType: ListUserResponse,
      responseStream: false,
      options: { _unknownFields: { 578365826: [new Uint8Array([8, 18, 6, 47, 117, 115, 101, 114, 115])] } },
    },
  },
} as const;

export interface UserServiceImplementation<CallContextExt = {}> {
  getUser(request: GetUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<User>>;
  listUsers(request: ListUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUserResponse>>;
}

export interface UserServiceClient<CallOptionsExt = {}> {
  getUser(request: DeepPartial<GetUserRequest>, options?: CallOptions & CallOptionsExt): Promise<User>;
  listUsers(request: DeepPartial<ListUserRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUserResponse>;
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
