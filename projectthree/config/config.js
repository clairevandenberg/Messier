require("dotenv").config()

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.SQLPASSWORD,
    "database": "journal_db",
    "host": "localhost",
    "port": 3002,
    "dialect": "mysql"
  },

  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  
  "production": {
    "username": "admin",
    "password": process.env.TRENT,
    "database": "journal_db",
    // "host": "musicdb-g2.cykqhanvgs0f.ap-southeast-2.rds.amazonaws.com",
    "dialect": "mysql"
  }
}