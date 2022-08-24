import { Router } from 'express';
import { authenticate, createAccessToken } from './auth.controller';
import { fetchUser } from '../middlewares/users.middleware';
import { verifyAccessToken, verifyRefreshToken } from '../middlewares/auth.middleware';
import { fetchById } from '../domains/users/users.controller';

const router = Router();

router.post('/authenticate', authenticate);

router.post('/token', [verifyRefreshToken, fetchUser], createAccessToken);

router.post('/verifyAccessToken', [verifyAccessToken], fetchById);

export default router;
