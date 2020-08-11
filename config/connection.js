// // Dependencies
// var Sequelize = require("sequelize");
// require("dotenv").config();

// // Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
// var sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSERNAME, process.env.DBPASSWORD, {
//     host: 'localhost',
//   port: 3002,
//   dialect: "mysql",
//   logging: console.log,
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   },
//     define: {
//     //This is to prevent Sequelize to add an s at the end of a table name
//       freezeTableName: true
//   }
// });

// // Exports the connection for other files to use
// module.exports = sequelize;