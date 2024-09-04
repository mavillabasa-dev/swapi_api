import { Router } from "express";
import { getPeople, getPeopleById } from "../controllers/peopleController";

const router = Router()

router.get('/', getPeople)
router.get('/:id', getPeopleById)

export default router