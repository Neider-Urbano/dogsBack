const { Router } = require('express');
const temperamentsRouter = Router();
const { Dog, Temperamento } = require('../db');
const {getTemperamentos} = require('../utils/getTemperamentos');

temperamentsRouter.get("/", async(req,res)=>{
    try {
        const TemperamentosDb=await getTemperamentos(Temperamento)
        if(TemperamentosDb[0]){
            res.status(200).send(TemperamentosDb)
        }else{
            throw new TypeError("la tabla de Temperamentos esta vacia")
        }
    } catch (error) {
        return res.status(404).send(error.message)
    }
})
module.exports=temperamentsRouter