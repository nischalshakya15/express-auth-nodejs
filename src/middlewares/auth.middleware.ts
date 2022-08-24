import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthorizedException } from '../exceptions/UnauthorizedException';
import { JwtException } from '../exceptions/JwtException';
import { config } from '../config/config';
import { AuthenticatedRequest } from '../domains/AuthenticatedRequest';

const TOKEN_TYPE = 'Bearer';

export function verifyAccessToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const accessToken: string | null = req.headers.authorization || null;
  if (accessToken) {
    const token: string[] = accessToken.split(' ');
    if (token[0] === TOKEN_TYPE) {
      jwt.verify(token[1], config.jwt.accessToken.secret, (error, user: any) => {
        if (error) {
          throw new JwtException(error.message);
        }
        req.users = user.data;
        next();
      });
    } else {
      throw new JwtException('Invalid token');
    }
  } else {
    throw new UnauthorizedException('Unauthorized');
  }
}

export function verifyRefreshToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const refreshToken: string = req.body.refreshToken;
  if (refreshToken) {
    const token: string[] = refreshToken.split(' ');
    if (token[0] === TOKEN_TYPE) {
      jwt.verify(token[1], config.jwt.refreshToken.secret, (err, user: any) => {
        if (err) {
          throw new JwtException(err.message);
        }
        req.users = user.data;
        next();
      });
    } else {
      throw new JwtException('Invalid token');
    }
  } else {
    throw new UnauthorizedException('Unauthorized');
  }
}
