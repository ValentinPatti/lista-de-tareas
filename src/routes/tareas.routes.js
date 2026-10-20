import { Router } from "express";
import { crearTarea, test } from "../controllers/tareas.controllers.js";

const router = Router()

router.route('/test').get(test)
router.route('/').get(crearTarea)

export default router