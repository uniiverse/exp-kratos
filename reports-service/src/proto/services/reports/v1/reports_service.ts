/* eslint-disable */
import type { CallContext, CallOptions } from "nice-grpc-common";
import _m0 from "protobufjs/minimal";
import { Filter } from "../../../com/reports/v1/filter";

export const protobufPackage = "services.reports.v1";

export interface CreateGuestTokenRequest {
  dashboardId: string;
  filter: Filter | undefined;
  locale: string;
}

export interface CreateGuestTokenResponse {
  token: string;
}

function createBaseCreateGuestTokenRequest(): CreateGuestTokenRequest {
  return { dashboardId: "", filter: undefined, locale: "" };
}

export const CreateGuestTokenRequest = {
  encode(message: CreateGuestTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.dashboardId !== "") {
      writer.uint32(10).string(message.dashboardId);
    }
    if (message.filter !== undefined) {
      Filter.encode(message.filter, writer.uint32(18).fork()).ldelim();
    }
    if (message.locale !== "") {
      writer.uint32(26).string(message.locale);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGuestTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGuestTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dashboardId = reader.string();
          break;
        case 2:
          message.filter = Filter.decode(reader, reader.uint32());
          break;
        case 3:
          message.locale = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuestTokenRequest {
    return {
      dashboardId: isSet(object.dashboardId) ? String(object.dashboardId) : "",
      filter: isSet(object.filter) ? Filter.fromJSON(object.filter) : undefined,
      locale: isSet(object.locale) ? String(object.locale) : "",
    };
  },

  toJSON(message: CreateGuestTokenRequest): unknown {
    const obj: any = {};
    message.dashboardId !== undefined && (obj.dashboardId = message.dashboardId);
    message.filter !== undefined && (obj.filter = message.filter ? Filter.toJSON(message.filter) : undefined);
    message.locale !== undefined && (obj.locale = message.locale);
    return obj;
  },

  create(base?: DeepPartial<CreateGuestTokenRequest>): CreateGuestTokenRequest {
    return CreateGuestTokenRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateGuestTokenRequest>): CreateGuestTokenRequest {
    const message = createBaseCreateGuestTokenRequest();
    message.dashboardId = object.dashboardId ?? "";
    message.filter = (object.filter !== undefined && object.filter !== null)
      ? Filter.fromPartial(object.filter)
      : undefined;
    message.locale = object.locale ?? "";
    return message;
  },
};

function createBaseCreateGuestTokenResponse(): CreateGuestTokenResponse {
  return { token: "" };
}

export const CreateGuestTokenResponse = {
  encode(message: CreateGuestTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateGuestTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateGuestTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateGuestTokenResponse {
    return { token: isSet(object.token) ? String(object.token) : "" };
  },

  toJSON(message: CreateGuestTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    return obj;
  },

  create(base?: DeepPartial<CreateGuestTokenResponse>): CreateGuestTokenResponse {
    return CreateGuestTokenResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<CreateGuestTokenResponse>): CreateGuestTokenResponse {
    const message = createBaseCreateGuestTokenResponse();
    message.token = object.token ?? "";
    return message;
  },
};

export type ReportsServiceDefinition = typeof ReportsServiceDefinition;
export const ReportsServiceDefinition = {
  name: "ReportsService",
  fullName: "services.reports.v1.ReportsService",
  methods: {
    createGuestToken: {
      name: "CreateGuestToken",
      requestType: CreateGuestTokenRequest,
      requestStream: false,
      responseType: CreateGuestTokenResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ReportsServiceImplementation<CallContextExt = {}> {
  createGuestToken(
    request: CreateGuestTokenRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<CreateGuestTokenResponse>>;
}

export interface ReportsServiceClient<CallOptionsExt = {}> {
  createGuestToken(
    request: DeepPartial<CreateGuestTokenRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<CreateGuestTokenResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
