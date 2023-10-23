const Sequelize = require('sequelize')

module.exports = new Sequelize(
    
    // MySQL DB for production
    
    // process.env.DB_NAME,
    // process.env.DB_USER, 
    // process.env.DB_PASS,
    // {
    //     host: process.env.DB_HOST, 
    //     port: process.env.DB_PORT, 
    //     dialect: process.env.DB_DIALECT
    // }


    // local sqlite file for dev
    {
        dialect: process.env.DB_DIALECT,
        storage: process.env.DB_STORAGE        
    }

);
