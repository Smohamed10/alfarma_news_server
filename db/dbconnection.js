const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"elfarma",
    port:"3306"
})

connection.connect((err)=>{
    if(err)
    {
        throw err ;
    }
    console.log("DATABASE IS CONNECTED");
})

module.exports = connection ;