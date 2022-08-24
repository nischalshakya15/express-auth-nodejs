import { GlobalExceptionHandler } from './GlobalExceptionHandler';
import * as HttpStatus from 'http-status-codes';

export class JwtException extends GlobalExceptionHandler {
  constructor(message: string) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, message);
  }
}
