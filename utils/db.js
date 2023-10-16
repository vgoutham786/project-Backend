// db.js

// const mysql = require('mysql2');

// // Create a connection pool
// const pool = mysql.createPool({
//     user: 'root',
//     host: 'localhost',
//     database: 'projecthub',
//     password: 'Goutham@786',
//     // port: 3306, // Replace with your database port
// });

// module.exports = pool.promise(); 
const { Sequelize } = require('sequelize');
require('dotenv').config();
// Connect to your MySQL database (modify the database URL accordingly)
const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'mysql',
    logging: false, // Set to true for SQL query logging during development
});

// Test the database connection
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;
