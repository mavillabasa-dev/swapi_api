import { Router } from 'express';
import { getPlanets } from '../controllers/planetController';

const router = Router();

router.get('/', getPlanets);

export default router;
