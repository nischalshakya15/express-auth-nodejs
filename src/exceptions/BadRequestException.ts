import { GlobalExceptionHandler } from './GlobalExceptionHandler';
import * as HttpStatus from 'http-status-codes';

export class BadRequestException extends GlobalExceptionHandler {
  constructor(message: string) {
    super(HttpStatus.BAD_REQUEST, message);
  }
}
