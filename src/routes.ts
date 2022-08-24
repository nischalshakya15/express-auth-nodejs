import { Router } from 'express';
import userRoutes from './domains/users/users.routes';
import authRoutes from './auth/auth.routes';
import { verifyAccessToken } from './middlewares/auth.middleware';

const router = Router();

router.use(authRoutes);

router.use(verifyAccessToken);

router.use('/users', userRoutes);

export default router;
