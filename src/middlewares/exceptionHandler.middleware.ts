import { GlobalExceptionHandler } from '../exceptions/GlobalExceptionHandler';
import { NextFunction, Request, Response } from 'express';
import * as HttpStatus from 'http-status-codes';
import logger from '../config/logger';

export function exceptionHandlerMiddleware(exceptionHandler: GlobalExceptionHandler, req: Request, res: Response, next: NextFunction) {
  logger.error(
    `method: ${req.method}, url: ${req.originalUrl}, status: ${exceptionHandler.status || HttpStatus.INTERNAL_SERVER_ERROR}, message: ${
      exceptionHandler.message || 'Something went wrong'
    }`
  );
  res.status(exceptionHandler.status || HttpStatus.INTERNAL_SERVER_ERROR).send({
    timestamp: new Date(),
    status: exceptionHandler.status || HttpStatus.INTERNAL_SERVER_ERROR,
    message: exceptionHandler.message || 'Something went wrong'
  });
  next();
}
