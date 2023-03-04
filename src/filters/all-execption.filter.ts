import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class AllExecptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception['status'] || 500;

    response.status(status).json({
      code: status,
      message: exception['message'] || 'server error',
      timestamp: new Date().toISOString(),
      path: request.url
    });
  }
}
