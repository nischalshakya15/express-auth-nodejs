import { NextFunction, Request, Response } from 'express';
import { Users } from '../domains/users/users';
import * as HttpStatus from 'http-status-codes';
import { generateAccessToken, generateToken } from './jwt';
import * as authService from './auth.service';
import { AuthenticatedRequest } from '../domains/AuthenticatedRequest';

export async function authenticate(req: Request, res: Response, next: NextFunction) {
  try {
    const user: Users = await authService.authenticate(req.body);
    const { refreshToken, accessToken } = await generateToken(user);
    res.status(HttpStatus.OK).send({ refreshToken, accessToken });
  } catch (error) {
    next(error);
  }
}

export async function createAccessToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const accessToken: string = generateAccessToken(req.users.id);
    res.status(HttpStatus.OK).send({ accessToken });
  } catch (err) {
    next(err);
  }
}
