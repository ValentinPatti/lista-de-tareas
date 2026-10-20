import { Router } from "express";
import tareasRouter from "./tareas.routes.js";

const router = Router()

router.use('/tareas', tareasRouter)

export default router