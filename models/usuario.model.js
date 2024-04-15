const {model} =require("mongoose")
const schemaUsuario = require("./usuario.schema")
const Usuario=model("Usuario",schemaUsuario)
module.exports=Usuario

