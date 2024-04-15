const mongoose = require('mongoose');

const schemaAgenda = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    servicos: {
        type: [String],
        required: true
    },
    funcionario: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    hora: {
        type: String, 
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
}, { timestamps: true }); 

module.exports = schemaAgenda