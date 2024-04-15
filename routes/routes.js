const express=require("express")
const {listarTodasAgendas,criarAgenda} = require("../controllers/agenda.controller")

const routes=express.Router()


routes.post("/agendar",criarAgenda)
routes.get("/agendas",listarTodasAgendas)


module.exports=routes