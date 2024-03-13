const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"dpg-cnotf2tjm4es738c08r0-a",
    user:"root",
    password:"TBFbQceEvDYwfCnuzDa8jmUjGmlu5OuG",
    database:"elfarma",
    port:"5432"
})

connection.connect((err)=>{
    if(err)
    {
        throw err ;
    }
    console.log("DATABASE IS CONNECTED");
})

module.exports = connection ;