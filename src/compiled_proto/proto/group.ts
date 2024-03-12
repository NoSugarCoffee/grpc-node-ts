/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal.js";
import { Reference } from "./base.js";

export const protobufPackage = "travix.protobuf.catalog";

export interface Group {
  description: string;
  displayName: string;
  email: string;
  gitHubMaintainers: string[];
  gitHubOrgs: string[];
  gitHubSlug: string;
  gitHubUsers: string[];
  id: string;
  members: string[];
  name: string;
  parent: string;
  references: Reference[];
  slackChannel: string;
  children: string[];
  type: string;
  source: string;
  /** only used and required for terraform block */
  gitHubOrg: string;
  gitHubExternalUsers: string[];
  gitHubProductOwners: string[];
}

export interface Groups {
  parent: string;
  type: string;
  groups: Group[];
  /** required for terraform ACC tests */
  id: string;
  gitHubOrg: string;
}

export interface GetGroupRequest {
  id: string;
  name: string;
  gitHubOrg?: string | undefined;
}

export interface ListGroupsRequest {
  parent: string;
  type: string;
  gitHubOrg?: string | undefined;
}

export interface ListGroupsResponse {
  groups: Group[];
}

function createBaseGroup(): Group {
  return {
    description: "",
    displayName: "",
    email: "",
    gitHubMaintainers: [],
    gitHubOrgs: [],
    gitHubSlug: "",
    gitHubUsers: [],
    id: "",
    members: [],
    name: "",
    parent: "",
    references: [],
    slackChannel: "",
    children: [],
    type: "",
    source: "",
    gitHubOrg: "",
    gitHubExternalUsers: [],
    gitHubProductOwners: [],
  };
}

export const Group = {
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.description !== "") {
      writer.uint32(10).string(message.description);
    }
    if (message.displayName !== "") {
      writer.uint32(18).string(message.displayName);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    for (const v of message.gitHubMaintainers) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.gitHubOrgs) {
      writer.uint32(42).string(v!);
    }
    if (message.gitHubSlug !== "") {
      writer.uint32(50).string(message.gitHubSlug);
    }
    for (const v of message.gitHubUsers) {
      writer.uint32(58).string(v!);
    }
    if (message.id !== "") {
      writer.uint32(66).string(message.id);
    }
    for (const v of message.members) {
      writer.uint32(74).string(v!);
    }
    if (message.name !== "") {
      writer.uint32(82).string(message.name);
    }
    if (message.parent !== "") {
      writer.uint32(90).string(message.parent);
    }
    for (const v of message.references) {
      Reference.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.slackChannel !== "") {
      writer.uint32(106).string(message.slackChannel);
    }
    for (const v of message.children) {
      writer.uint32(114).string(v!);
    }
    if (message.type !== "") {
      writer.uint32(122).string(message.type);
    }
    if (message.source !== "") {
      writer.uint32(130).string(message.source);
    }
    if (message.gitHubOrg !== "") {
      writer.uint32(138).string(message.gitHubOrg);
    }
    for (const v of message.gitHubExternalUsers) {
      writer.uint32(146).string(v!);
    }
    for (const v of message.gitHubProductOwners) {
      writer.uint32(154).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Group {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
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

          message.gitHubMaintainers.push(reader.string());
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

          message.gitHubSlug = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.gitHubUsers.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.id = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.members.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.name = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.references.push(Reference.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.slackChannel = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.children.push(reader.string());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.type = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.source = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.gitHubOrg = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.gitHubExternalUsers.push(reader.string());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.gitHubProductOwners.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Group {
    return {
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      gitHubMaintainers: globalThis.Array.isArray(object?.gitHubMaintainers)
        ? object.gitHubMaintainers.map((e: any) => globalThis.String(e))
        : [],
      gitHubOrgs: globalThis.Array.isArray(object?.gitHubOrgs)
        ? object.gitHubOrgs.map((e: any) => globalThis.String(e))
        : [],
      gitHubSlug: isSet(object.gitHubSlug) ? globalThis.String(object.gitHubSlug) : "",
      gitHubUsers: globalThis.Array.isArray(object?.gitHubUsers)
        ? object.gitHubUsers.map((e: any) => globalThis.String(e))
        : [],
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      members: globalThis.Array.isArray(object?.members) ? object.members.map((e: any) => globalThis.String(e)) : [],
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      references: globalThis.Array.isArray(object?.references)
        ? object.references.map((e: any) => Reference.fromJSON(e))
        : [],
      slackChannel: isSet(object.slackChannel) ? globalThis.String(object.slackChannel) : "",
      children: globalThis.Array.isArray(object?.children) ? object.children.map((e: any) => globalThis.String(e)) : [],
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      source: isSet(object.source) ? globalThis.String(object.source) : "",
      gitHubOrg: isSet(object.gitHubOrg) ? globalThis.String(object.gitHubOrg) : "",
      gitHubExternalUsers: globalThis.Array.isArray(object?.gitHubExternalUsers)
        ? object.gitHubExternalUsers.map((e: any) => globalThis.String(e))
        : [],
      gitHubProductOwners: globalThis.Array.isArray(object?.gitHubProductOwners)
        ? object.gitHubProductOwners.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Group): unknown {
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
    if (message.gitHubMaintainers?.length) {
      obj.gitHubMaintainers = message.gitHubMaintainers;
    }
    if (message.gitHubOrgs?.length) {
      obj.gitHubOrgs = message.gitHubOrgs;
    }
    if (message.gitHubSlug !== "") {
      obj.gitHubSlug = message.gitHubSlug;
    }
    if (message.gitHubUsers?.length) {
      obj.gitHubUsers = message.gitHubUsers;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.members?.length) {
      obj.members = message.members;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.references?.length) {
      obj.references = message.references.map((e) => Reference.toJSON(e));
    }
    if (message.slackChannel !== "") {
      obj.slackChannel = message.slackChannel;
    }
    if (message.children?.length) {
      obj.children = message.children;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.source !== "") {
      obj.source = message.source;
    }
    if (message.gitHubOrg !== "") {
      obj.gitHubOrg = message.gitHubOrg;
    }
    if (message.gitHubExternalUsers?.length) {
      obj.gitHubExternalUsers = message.gitHubExternalUsers;
    }
    if (message.gitHubProductOwners?.length) {
      obj.gitHubProductOwners = message.gitHubProductOwners;
    }
    return obj;
  },

  create(base?: DeepPartial<Group>): Group {
    return Group.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Group>): Group {
    const message = createBaseGroup();
    message.description = object.description ?? "";
    message.displayName = object.displayName ?? "";
    message.email = object.email ?? "";
    message.gitHubMaintainers = object.gitHubMaintainers?.map((e) => e) || [];
    message.gitHubOrgs = object.gitHubOrgs?.map((e) => e) || [];
    message.gitHubSlug = object.gitHubSlug ?? "";
    message.gitHubUsers = object.gitHubUsers?.map((e) => e) || [];
    message.id = object.id ?? "";
    message.members = object.members?.map((e) => e) || [];
    message.name = object.name ?? "";
    message.parent = object.parent ?? "";
    message.references = object.references?.map((e) => Reference.fromPartial(e)) || [];
    message.slackChannel = object.slackChannel ?? "";
    message.children = object.children?.map((e) => e) || [];
    message.type = object.type ?? "";
    message.source = object.source ?? "";
    message.gitHubOrg = object.gitHubOrg ?? "";
    message.gitHubExternalUsers = object.gitHubExternalUsers?.map((e) => e) || [];
    message.gitHubProductOwners = object.gitHubProductOwners?.map((e) => e) || [];
    return message;
  },
};

function createBaseGroups(): Groups {
  return { parent: "", type: "", groups: [], id: "", gitHubOrg: "" };
}

export const Groups = {
  encode(message: Groups, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    if (message.gitHubOrg !== "") {
      writer.uint32(42).string(message.gitHubOrg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Groups {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroups();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.groups.push(Group.decode(reader, reader.uint32()));
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

          message.gitHubOrg = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Groups {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [],
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      gitHubOrg: isSet(object.gitHubOrg) ? globalThis.String(object.gitHubOrg) : "",
    };
  },

  toJSON(message: Groups): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => Group.toJSON(e));
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.gitHubOrg !== "") {
      obj.gitHubOrg = message.gitHubOrg;
    }
    return obj;
  },

  create(base?: DeepPartial<Groups>): Groups {
    return Groups.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Groups>): Groups {
    const message = createBaseGroups();
    message.parent = object.parent ?? "";
    message.type = object.type ?? "";
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    message.id = object.id ?? "";
    message.gitHubOrg = object.gitHubOrg ?? "";
    return message;
  },
};

function createBaseGetGroupRequest(): GetGroupRequest {
  return { id: "", name: "", gitHubOrg: undefined };
}

export const GetGroupRequest = {
  encode(message: GetGroupRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.gitHubOrg !== undefined) {
      writer.uint32(26).string(message.gitHubOrg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetGroupRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetGroupRequest();
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
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gitHubOrg = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetGroupRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      gitHubOrg: isSet(object.gitHubOrg) ? globalThis.String(object.gitHubOrg) : undefined,
    };
  },

  toJSON(message: GetGroupRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.gitHubOrg !== undefined) {
      obj.gitHubOrg = message.gitHubOrg;
    }
    return obj;
  },

  create(base?: DeepPartial<GetGroupRequest>): GetGroupRequest {
    return GetGroupRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetGroupRequest>): GetGroupRequest {
    const message = createBaseGetGroupRequest();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.gitHubOrg = object.gitHubOrg ?? undefined;
    return message;
  },
};

function createBaseListGroupsRequest(): ListGroupsRequest {
  return { parent: "", type: "", gitHubOrg: undefined };
}

export const ListGroupsRequest = {
  encode(message: ListGroupsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.parent !== "") {
      writer.uint32(10).string(message.parent);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.gitHubOrg !== undefined) {
      writer.uint32(26).string(message.gitHubOrg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupsRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.parent = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.gitHubOrg = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListGroupsRequest {
    return {
      parent: isSet(object.parent) ? globalThis.String(object.parent) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      gitHubOrg: isSet(object.gitHubOrg) ? globalThis.String(object.gitHubOrg) : undefined,
    };
  },

  toJSON(message: ListGroupsRequest): unknown {
    const obj: any = {};
    if (message.parent !== "") {
      obj.parent = message.parent;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.gitHubOrg !== undefined) {
      obj.gitHubOrg = message.gitHubOrg;
    }
    return obj;
  },

  create(base?: DeepPartial<ListGroupsRequest>): ListGroupsRequest {
    return ListGroupsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListGroupsRequest>): ListGroupsRequest {
    const message = createBaseListGroupsRequest();
    message.parent = object.parent ?? "";
    message.type = object.type ?? "";
    message.gitHubOrg = object.gitHubOrg ?? undefined;
    return message;
  },
};

function createBaseListGroupsResponse(): ListGroupsResponse {
  return { groups: [] };
}

export const ListGroupsResponse = {
  encode(message: ListGroupsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ListGroupsResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListGroupsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.groups.push(Group.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListGroupsResponse {
    return { groups: globalThis.Array.isArray(object?.groups) ? object.groups.map((e: any) => Group.fromJSON(e)) : [] };
  },

  toJSON(message: ListGroupsResponse): unknown {
    const obj: any = {};
    if (message.groups?.length) {
      obj.groups = message.groups.map((e) => Group.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ListGroupsResponse>): ListGroupsResponse {
    return ListGroupsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListGroupsResponse>): ListGroupsResponse {
    const message = createBaseListGroupsResponse();
    message.groups = object.groups?.map((e) => Group.fromPartial(e)) || [];
    return message;
  },
};

export type GroupServiceDefinition = typeof GroupServiceDefinition;
export const GroupServiceDefinition = {
  name: "GroupService",
  fullName: "travix.protobuf.catalog.GroupService",
  methods: {
    getGroup: {
      name: "GetGroup",
      requestType: GetGroupRequest,
      requestStream: false,
      responseType: Group,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            new Uint8Array([
              37,
              90,
              21,
              18,
              19,
              47,
              103,
              114,
              111,
              117,
              112,
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
              12,
              47,
              103,
              114,
              111,
              117,
              112,
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
    listGroups: {
      name: "ListGroups",
      requestType: ListGroupsRequest,
      requestStream: false,
      responseType: ListGroupsResponse,
      responseStream: false,
      options: { _unknownFields: { 578365826: [new Uint8Array([9, 18, 7, 47, 103, 114, 111, 117, 112, 115])] } },
    },
  },
} as const;

export interface GroupServiceImplementation<CallContextExt = {}> {
  getGroup(request: GetGroupRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Group>>;
  listGroups(
    request: ListGroupsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListGroupsResponse>>;
}

export interface GroupServiceClient<CallOptionsExt = {}> {
  getGroup(request: DeepPartial<GetGroupRequest>, options?: CallOptions & CallOptionsExt): Promise<Group>;
  listGroups(
    request: DeepPartial<ListGroupsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListGroupsResponse>;
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
