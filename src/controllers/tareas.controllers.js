export const test = (req,res)=>{
    res.json({mensaje: "Bienvenidos al backend de lista de tareas"})
}

export const crearTarea = async(req,res)=>{
    try {
        console.log(req.body)
    } catch (error) {
        console.error(error)
        res.status(500).json({mensaje: "Ocurrio un error al intentar crear la tarea"})
    }
}