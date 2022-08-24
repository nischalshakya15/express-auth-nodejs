import { Router } from 'express';
import { create, fetchAll, fetchById, remove, update } from './users.controller';

const router = Router();

router.route('/').get(fetchAll).post(create);

router.route('/:id').get(fetchById).put(update).delete(remove);

export default router;
