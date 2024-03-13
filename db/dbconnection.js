const mysql = require("mysql");

const connection = mysql.createConnection({
    host:"bs1fexw97rcgcw7znhbw-mysql.services.clever-cloud.com",
    user:"uymmmja19megof2i",
    database:"bs1fexw97rcgcw7znhbw",
    password:"NuWW5hlAljjulPt5i7iN",
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