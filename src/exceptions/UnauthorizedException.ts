import { GlobalExceptionHandler } from './GlobalExceptionHandler';
import * as HttpStatus from 'http-status-codes';

export class UnauthorizedException extends GlobalExceptionHandler {
  constructor(message: string) {
    super(HttpStatus.UNAUTHORIZED, message);
  }
}
