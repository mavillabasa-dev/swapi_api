import { Router } from 'express';
import { getStarships } from '../controllers/starshipController';

const router = Router();

router.get('/', getStarships);

export default router;
