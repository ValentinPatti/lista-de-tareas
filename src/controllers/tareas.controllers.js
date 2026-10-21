import Tarea from "../models/tarea.js";

export const test = (req, res) => {
  res.json({ mensaje: "Bienvenidos al backend de lista de tareas" });
};

export const crearTarea = async (req, res) => {
  try {
    const tareaNueva = new Tarea(req.body);
    await tareaNueva.save();

    res.status(201).json({ mensaje: "Tarea creada correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar crear la tarea" });
  }
};

export const listarTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar mostrar las tareas" });
  }
};

export const listarTareaPorID = async (req, res) => {
  try {
    const tareaBuscada = await Tarea.findById(req.params.id);
    if (!tareaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontró la tarea con el ID enviado" });
    }
    res.status(200).json(tareaBuscada);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al buscar la tarea" });
  }
};

export const borrarTareaPorID = async (req, res) => {
  try {
    const tareaBorrada = await Tarea.findByIdAndDelete(req.params.id);
    if (!tareaBorrada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontró la tarea con el ID enviado" });
    }
    res.status(200).json({mensaje: "Tarea eliminada correctamente"});
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar borrar la tarea" });
  }
};

export const editarTareaPorID = async (req, res) => {
  try {
    const tareaEditada = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new:true});
    if (!tareaEditada) {
      return res
        .status(404)
        .json({ mensaje: "No se encontró la tarea con el ID enviado" });
    }
    res.status(200).json({mensaje: "La tarea se actualizó correctamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error al intentar editar la tarea por id" });
  }
};
