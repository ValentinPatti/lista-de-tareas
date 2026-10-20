import { Router } from "express";
import { crearTarea, listarTareas, test } from "../controllers/tareas.controllers.js";

const router = Router()

router.route('/test').get(test)
router.route('/').post(crearTarea).get(listarTareas)

export default router