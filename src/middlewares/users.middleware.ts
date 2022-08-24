import { AuthenticatedRequest } from '../domains/AuthenticatedRequest';
import { NextFunction, Response } from 'express';
import { fetchById } from '../domains/users/users.service';

export async function fetchUser(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  try {
    const id: number = req.users.id;
    req.users = await fetchById(id);
    next();
  } catch (err) {
    next(err);
  }
}
