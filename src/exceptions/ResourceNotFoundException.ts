import { GlobalExceptionHandler } from './GlobalExceptionHandler';
import * as HttpStatus from 'http-status-codes';

export class ResourceNotFoundException extends GlobalExceptionHandler {
  constructor(message: string) {
    super(HttpStatus.NOT_FOUND, message);
  }
}
