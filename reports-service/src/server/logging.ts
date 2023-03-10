import {CallContext, ServerError, ServerMiddlewareCall, Status} from 'nice-grpc';
import {isAbortError} from 'abort-controller-x';
import pino from 'pino';

const log = pino()
const NS_PER_SEC = 1e9
const NS_TO_MS = 1e6

export default async function* loggingMiddleware<Request, Response>(
  call: ServerMiddlewareCall<Request, Response>,
  context: CallContext,
) {
  const {path} = call.method;
  var startAt = process.hrtime()

  try {
    const result = yield* call.next(call.request, context);
    var diff = process.hrtime(startAt)

    var time = (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS

    log.info({duration: time.toFixed(3), path});

    return result;
  } catch (error:any) {
    if (error instanceof ServerError) {
      log.info(
        'Server call',
        path,
        `end: ${Status[error.code]}: ${error.details}`,
      );
    } else if (isAbortError(error)) {
      log.info('Server call', path, 'cancel');
    } else {
      log.error('Server call', path, `error: ${error?.stack}`);
    }

    throw error;
  }
}