import { Router } from "express";
import { crearTarea, listarTareaPorID, listarTareas, test } from "../controllers/tareas.controllers.js";

const router = Router()

router.route('/test').get(test)
router.route('/').post(crearTarea).get(listarTareas)
router.route('/:id').get(listarTareaPorID)

export default router