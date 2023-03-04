import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
  async intercept(context: ExecutionContext, next: CallHandler): Promise<any> {
    const response = context.switchToHttp().getResponse();
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;
    const startTime = Date.now();

    const data = await lastValueFrom(next.handle());

    const endTime = Date.now();
    const time = endTime - startTime;

    response.set('X-Response-Time', `${time}ms`);

    return {
      code: 0,
      data,
      message: 'success',
      method,
      time,
      url
    };
  }
}
