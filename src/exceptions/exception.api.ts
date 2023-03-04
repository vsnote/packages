import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * 业务异常（number模式）
 */
export class ApiException extends HttpException {
  constructor(code: number, message?: string, data?: any) {
    super({ code, message, data }, HttpStatus.OK);
  }
}
