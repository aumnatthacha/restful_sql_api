const mysql = require('mysql');
const dbConfig = require("../config/db.config");

//Create a connection to the database server
const connection = mysql.createConnection({
    host: dbConfig.host,
    user:dbConfig.user,
    password:dbConfig.password,
    database:dbConfig.db
});

// Open MYSQL connection
connection.connect(
    (error)=>{
        if(Error) throw error;
        console.log("Successfully connected to the database...");
    }
);

module.exports = connection;