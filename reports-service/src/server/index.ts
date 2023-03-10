import {
  ServerUnaryCall,
  sendUnaryData,
  ServerCredentials,
} from '@grpc/grpc-js';

import type { CallContext } from "nice-grpc-common";
import { createServer } from 'nice-grpc';
import {
  ServerReflectionService,
  ServerReflection,
} from 'nice-grpc-server-reflection';
import * as fs from 'fs';

import {
  CreateGuestTokenRequest,
  CreateGuestTokenResponse,
  ReportsServiceImplementation,
} from '../proto/services/reports/v1/reports_service';
import { ReportsServiceDefinition, DeepPartial } from '../proto/services/reports/v1/reports_service';
import { Filter } from '../proto/com/reports/v1/filter';

import loggingMiddleware from './logging';

// export interface ReportsServiceImplementation<CallContextExt = {}> {
//   createGuestToken(
//     request: CreateGuestTokenRequest,
//     context: CallContext & CallContextExt,
//   ): Promise<DeepPartial<CreateGuestTokenResponse>>;
// }

// export interface ReportsServiceClient<CallOptionsExt = {}> {
//   createGuestToken(
//     request: DeepPartial<CreateGuestTokenRequest>,
//     options?: CallOptions & CallOptionsExt,
//   ): Promise<CreateGuestTokenResponse>;
// }


class ReportsService implements ReportsServiceImplementation {
  createGuestToken(request: CreateGuestTokenRequest, context: CallContext): Promise<CreateGuestTokenResponse> {
    let resp = CreateGuestTokenResponse.create();
    resp.token = "test";
    return Promise.resolve(resp);
  }
}


// const impl: ReportsServiceImplementation = {
 
// };

// async createGuestToken(
  //   request: CreateGuestTokenRequest,
  //   context: CallContext,
  // ): Promise<DeepPartial<CreateGuestTokenResponse>> {
  //   const response = CreateGuestTokenResponse.create();
    
  //   switch (request.dashboardId) {
  //     case "0":
  //       response.token = "token_0";
  //       break;
  //     case "1":
  //     case "2":
  //     default:
  //       response.token
  //   }

  //   return response;
  // },


// const impl: ReportsServiceDefinition = {
//   CreateGuestToken: function (request: CreateGuestTokenRequest): Promise<CreateGuestTokenResponse> {
//     throw new Error('Function not implemented.');
//   }
// }

// CreateGuestToken(call, callback) {
//   const response = CreateGuestTokenResponse.create();
// 
  //  = "token_other"
//   }

//   callback(null, response);
// }

// CreateGuestToken: function (request: CreateGuestTokenRequest): Promise<CreateGuestTokenResponse> {
//   throw new Error('Function not implemented.');
// }

const server = createServer()
  .use(loggingMiddleware);

server.add(
  ServerReflectionService,
  ServerReflection(
    fs.readFileSync('proto/descriptor_set.bin'),
    // specify fully-qualified names of exposed services
    [ReportsServiceDefinition.fullName],
  ),
);

server.add(ReportsServiceDefinition, new ReportsService());
server.listen('0.0.0.0:9001');
console.log('Server running at http://0.0.0.0:9001');

// server.bindAsync('0.0.0.0:4000', ServerCredentials.createInsecure(), () => {
//   server.start();

//   console.log('server is running on 0.0.0.0:4000');
// });