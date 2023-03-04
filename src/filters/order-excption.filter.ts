import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import * as _ from 'lodash';

@Catch()
export class OrderExceptionFilter implements ExceptionFilter {
  private logger = new Logger('OrderExceptionFilter');
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const errorResponse = {
      message: exception.message,
      code: _.get(exception, 'response.code'), // 自定义code
      url: request.originalUrl // 错误的url地址
    };

    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    this.logger.error(`Http Status: ${status}, Error Message: ${JSON.stringify(errorResponse)}`);

    // 设置返回的状态码、请求头、发送错误信息
    response.status(status).json(errorResponse);
  }
}
