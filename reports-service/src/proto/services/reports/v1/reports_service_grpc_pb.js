// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_reports_v1_reports_service_pb = require('../../../services/reports/v1/reports_service_pb.js');
var com_reports_v1_filter_pb = require('../../../com/reports/v1/filter_pb.js');

function serialize_services_reports_v1_CreateGuestTokenRequest(arg) {
  if (!(arg instanceof services_reports_v1_reports_service_pb.CreateGuestTokenRequest)) {
    throw new Error('Expected argument of type services.reports.v1.CreateGuestTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_reports_v1_CreateGuestTokenRequest(buffer_arg) {
  return services_reports_v1_reports_service_pb.CreateGuestTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_reports_v1_CreateGuestTokenResponse(arg) {
  if (!(arg instanceof services_reports_v1_reports_service_pb.CreateGuestTokenResponse)) {
    throw new Error('Expected argument of type services.reports.v1.CreateGuestTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_reports_v1_CreateGuestTokenResponse(buffer_arg) {
  return services_reports_v1_reports_service_pb.CreateGuestTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ReportsServiceService = exports.ReportsServiceService = {
  createGuestToken: {
    path: '/services.reports.v1.ReportsService/CreateGuestToken',
    requestStream: false,
    responseStream: false,
    requestType: services_reports_v1_reports_service_pb.CreateGuestTokenRequest,
    responseType: services_reports_v1_reports_service_pb.CreateGuestTokenResponse,
    requestSerialize: serialize_services_reports_v1_CreateGuestTokenRequest,
    requestDeserialize: deserialize_services_reports_v1_CreateGuestTokenRequest,
    responseSerialize: serialize_services_reports_v1_CreateGuestTokenResponse,
    responseDeserialize: deserialize_services_reports_v1_CreateGuestTokenResponse,
  },
};

exports.ReportsServiceClient = grpc.makeGenericClientConstructor(ReportsServiceService);
