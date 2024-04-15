const mongoose=require("mongoose")

const schemaUsuario= new mongoose.Schema({
    primeiroNome:{
        type:String,
        required:true
    },
    segundoNome:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    senha:{
        type:String,
        required:true
    }
},{timestamps})


module.exports=schemaUsuario