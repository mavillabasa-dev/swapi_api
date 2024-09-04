import { Router } from 'express';
import { getPlanets, getPlanetsById } from '../controllers/planetController';

const router = Router();

router.get('/', getPlanets);
router.get('/:id', getPlanetsById);

export default router;
