require("dotenv").config()

module.exports = {
  "development": {
    "username": "root",
    "password": process.env.SQLPASSWORD,
    "database": "journal_db",
    "host": "localhost",
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
    "username": "cvq1gs247vq7qv74",
    "password": process.env.HEROKUPASSWORD,
    "database": "vxah0a6j3m9v5ctv",
    "host": "wp433upk59nnhpoh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "port": "3306"
  }
}