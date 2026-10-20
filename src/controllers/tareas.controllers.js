import Tarea from "../models/tarea.js"

export const test = (req,res)=>{
    res.json({mensaje: "Bienvenidos al backend de lista de tareas"})
}

export const crearTarea = async(req,res)=>{
    try {
        const tareaNueva = new Tarea(req.body)
        await tareaNueva.save()

        res.status(201).json({mensaje: "Tarea creada correctamente"})
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Ocurrio un error al intentar crear la tarea"})
    }
}

export const listarTareas = async(req,res)=>{
    try {
        const tareas = await Tarea.find()
        res.status(200).json(tareas)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Ocurrio un error al intentar crear la tarea"})
    }
}