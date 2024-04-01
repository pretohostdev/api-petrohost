const Sequelize = require('sequelize');
const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
    dialect: 'mysql',
    host: 'your_host', 
    port: 3306, 
    logging: false,
});

module.exports = sequelize;

