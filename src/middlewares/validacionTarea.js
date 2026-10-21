import { body, param } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

export const validacionTarea = [
  body("nombreTarea")
    .notEmpty()
    .withMessage("El nombre de la tarea es obligatoria")
    .isString()
    .withMessage("El nombre de la tarea tiene que ser un String")
    .isLength({ min: 4, max: 100 })
    .withMessage(
      "El nombre de la tarea debe contener entre 4 y 100 caracteres",
    ),
  resultadoValidacion,
];

export const validacionIDTarea = [
  param("id").isMongoId().withMessage("El ID enviado debe ser del formato de ID de Mongo"),
  resultadoValidacion,
];
