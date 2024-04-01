const Sequelize = require('sequelize');
const sequelize = require('../db/mysql'); 

const SchemaAgenda = sequelize.define('schema', {
    nome: {
        type: Sequelize.STRING,
        
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, 
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    servicos: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    funcionario: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data: {
        type: Sequelize.DATEONLY, 
        allowNull: false,
    },
    hora: {
        type: Sequelize.STRING, 
        allowNull: false,
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = SchemaAgenda;
