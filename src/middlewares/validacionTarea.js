import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

export const validacionTarea = [
  body("nombreTarea")
    .notEmpty()
    .withMessage("El nombre de la tarea es obligatoria")
    .isString()
    .withMessage('El nombre de la tarea tiene que ser un String'),
    resultadoValidacion
];
