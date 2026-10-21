import { Router } from "express";
import {
  borrarTareaPorID,
  crearTarea,
  editarTareaPorID,
  listarTareaPorID,
  listarTareas,
  test,
} from "../controllers/tareas.controllers.js";
import {
  validacionIDTarea,
  validacionTarea,
} from "../middlewares/validacionTarea.js";

const router = Router();

router.route("/test").get(test);
router.route("/").post(validacionTarea, crearTarea).get(listarTareas);
router
  .route("/:id")
  .get(validacionIDTarea, listarTareaPorID)
  .delete(validacionIDTarea, borrarTareaPorID)
  .put([validacionIDTarea, validacionTarea], editarTareaPorID);

export default router;
