const {model} =require("mongoose")
const schemaAgenda = require("./schema.agenda")

const Agenda=model("Agenda",schemaAgenda)
module.exports=Agenda

