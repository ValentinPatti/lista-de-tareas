import { Router } from "express";
import { borrarTareaPorID, crearTarea, editarTareaPorID, listarTareaPorID, listarTareas, test } from "../controllers/tareas.controllers.js";

const router = Router()

router.route('/test').get(test)
router.route('/').post(crearTarea).get(listarTareas)
router.route('/:id').get(listarTareaPorID).delete(borrarTareaPorID).put(editarTareaPorID)

export default router