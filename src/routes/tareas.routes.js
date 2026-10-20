import { Router } from "express";
import { crearTarea, test } from "../controllers/tareas.controllers.js";

const router = Router()

router.route('/test').get(test)
router.route('/').post(crearTarea)

export default router