import {
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
import { ReportsServiceDefinition } from '../proto/services/reports/v1/reports_service';
import { Filter } from '../proto/com/reports/v1/filter';

import loggingMiddleware from './logging';

class ReportsService implements ReportsServiceImplementation {
  createGuestToken(request: CreateGuestTokenRequest, context: CallContext): Promise<CreateGuestTokenResponse> {
    let resp = CreateGuestTokenResponse.create();
    resp.token = "test";
    return Promise.resolve(resp);
  }
}

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

const checkClientCert = false;
const caPath = 'certs/ca-cert.pem';
const keyPath = 'certs/server-key.pem';
const certPath = 'certs/server-cert.pem';

const credentials = ServerCredentials.createSsl(
  fs.readFileSync(caPath), [{
      cert_chain: fs.readFileSync(certPath),
      private_key: fs.readFileSync(keyPath)
  }], checkClientCert);

server.add(ReportsServiceDefinition, new ReportsService());
server.listen('0.0.0.0:9001', credentials);
console.log('Server running at grpc://0.0.0.0:9001 (TLS enabled)');
