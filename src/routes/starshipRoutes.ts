import { Router } from 'express';
import { getStarships, getStarshipsById } from '../controllers/starshipController';

const router = Router();

router.get('/', getStarships);
router.get('/:id', getStarshipsById);

export default router;
