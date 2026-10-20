import { Router } from "express";

const router = Router()

router.route('/test').get((req,res)=>{
    res.json({mensaje: "Bienvenidos al backend de lista de tareas"})
})

export default router