/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "com.reports.v1";

export interface Filter {
  userId: string;
  eventIds: string;
  minDateOfOrder: string;
  maxDateOfOrder: string;
  minDateOfAttendance: string;
  maxDateOfAttendance: string;
  currency: string;
}

function createBaseFilter(): Filter {
  return {
    userId: "",
    eventIds: "",
    minDateOfOrder: "",
    maxDateOfOrder: "",
    minDateOfAttendance: "",
    maxDateOfAttendance: "",
    currency: "",
  };
}

export const Filter = {
  encode(message: Filter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.eventIds !== "") {
      writer.uint32(18).string(message.eventIds);
    }
    if (message.minDateOfOrder !== "") {
      writer.uint32(26).string(message.minDateOfOrder);
    }
    if (message.maxDateOfOrder !== "") {
      writer.uint32(34).string(message.maxDateOfOrder);
    }
    if (message.minDateOfAttendance !== "") {
      writer.uint32(42).string(message.minDateOfAttendance);
    }
    if (message.maxDateOfAttendance !== "") {
      writer.uint32(50).string(message.maxDateOfAttendance);
    }
    if (message.currency !== "") {
      writer.uint32(58).string(message.currency);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Filter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string();
          break;
        case 2:
          message.eventIds = reader.string();
          break;
        case 3:
          message.minDateOfOrder = reader.string();
          break;
        case 4:
          message.maxDateOfOrder = reader.string();
          break;
        case 5:
          message.minDateOfAttendance = reader.string();
          break;
        case 6:
          message.maxDateOfAttendance = reader.string();
          break;
        case 7:
          message.currency = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Filter {
    return {
      userId: isSet(object.userId) ? String(object.userId) : "",
      eventIds: isSet(object.eventIds) ? String(object.eventIds) : "",
      minDateOfOrder: isSet(object.minDateOfOrder) ? String(object.minDateOfOrder) : "",
      maxDateOfOrder: isSet(object.maxDateOfOrder) ? String(object.maxDateOfOrder) : "",
      minDateOfAttendance: isSet(object.minDateOfAttendance) ? String(object.minDateOfAttendance) : "",
      maxDateOfAttendance: isSet(object.maxDateOfAttendance) ? String(object.maxDateOfAttendance) : "",
      currency: isSet(object.currency) ? String(object.currency) : "",
    };
  },

  toJSON(message: Filter): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = message.userId);
    message.eventIds !== undefined && (obj.eventIds = message.eventIds);
    message.minDateOfOrder !== undefined && (obj.minDateOfOrder = message.minDateOfOrder);
    message.maxDateOfOrder !== undefined && (obj.maxDateOfOrder = message.maxDateOfOrder);
    message.minDateOfAttendance !== undefined && (obj.minDateOfAttendance = message.minDateOfAttendance);
    message.maxDateOfAttendance !== undefined && (obj.maxDateOfAttendance = message.maxDateOfAttendance);
    message.currency !== undefined && (obj.currency = message.currency);
    return obj;
  },

  create(base?: DeepPartial<Filter>): Filter {
    return Filter.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<Filter>): Filter {
    const message = createBaseFilter();
    message.userId = object.userId ?? "";
    message.eventIds = object.eventIds ?? "";
    message.minDateOfOrder = object.minDateOfOrder ?? "";
    message.maxDateOfOrder = object.maxDateOfOrder ?? "";
    message.minDateOfAttendance = object.minDateOfAttendance ?? "";
    message.maxDateOfAttendance = object.maxDateOfAttendance ?? "";
    message.currency = object.currency ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
