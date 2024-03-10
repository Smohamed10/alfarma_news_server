//================= init express app ===============
const express = require("express");
const app = express();


//=================Global middleware==================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("upload"));
const cors = require("cors");
app.use(cors());  // allow https requst,respons


//======== run the app ============//
app.listen(4004,"localhost",()=>{

    console.log("SERVER IS RUNNING....");
})


//======== require routes ========//

//======== auth function =========//
 app.use("/register",require("./routes/auth/register"));
 app.use("/login",require("./routes/auth/login"));
//======== admin function ========//
app.use("/createadmin",require("./routes/admin_fun/create_admin"));
app.use("/creatnews",require("./routes/admin_fun/createnews"));
app.use("/createads",require("./routes/admin_fun/createads"));
//======== user function ========//
app.use("/getpost",require("./routes/user function/getnew"));
app.use("/getallnews",require("./routes/user function/getallnews"));
app.use("/getallads",require("./routes/user function/getallads"));