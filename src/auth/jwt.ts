import jwt from 'jsonwebtoken';
import { Users } from '../domains/users/users';
import { config } from '../config/config';
import { insert } from './token.repository';

export async function generateToken(user: Users) {
  const id: number = Number(user.id);
  const accessToken: string = generateAccessToken(id);
  const refreshToken: string = generateRefreshToken(id);

  await insert(user.id ? user.id : null, refreshToken, new Date(Date.now() + parseInt(config.jwt.refreshToken.expiresIn, 10)));
  return { accessToken, refreshToken };
}

export function generateAccessToken(id: number): string {
  return (
    'Bearer ' +
    jwt.sign({ data: { id } }, config.jwt.accessToken.secret, {
      expiresIn: config.jwt.accessToken.expiresIn
    })
  );
}

export function generateRefreshToken(id: number): string {
  return (
    'Bearer ' +
    jwt.sign({ data: { id, refreshToken: true } }, config.jwt.refreshToken.secret, {
      expiresIn: config.jwt.refreshToken.expiresIn
    })
  );
}
