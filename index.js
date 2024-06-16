//================= init express app ===============
const express = require("express");
const https = require('https');
const app = express();
//const job=require('./keepAwake');
//job.job.start();

//=================Global middleware==================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("upload"));
const cors = require("cors");

// CORS middleware allowing requests from any origin
app.use(cors());


//======== run the app ============//
// Run the app
const port = 4002;
app.listen(port || process.env.port, () => {
    console.log(`SERVER IS RUNNING....${port}`);
});

//======== require routes ========//

//======== auth function =========//
 app.use("/api/register",require("./routes/auth/register"));
 app.use("/api/login",require("./routes/auth/login"));
//======== admin function ========//
app.use("/api/createadmin",require("./routes/admin_fun/create_admin"));
app.use("/api/creatnews",require("./routes/news/createnews"));
app.use("/api/createads",require("./routes/ads/createads"));
//======== user function ========//
app.use("/api/getpost",require("./routes/news/getnew"));
app.use("/api/getallnews",require("./routes/news/getallnews"));
app.use("/api/getallads",require("./routes/ads/getallads"));
app.use("/api/createcomment",require("./routes/comments/createcomment"));
app.use("/api/getcomment",require("./routes/comments/getcomment"));~
//======== gets ============//
app.use("/api/catget",require("./routes/gets/getpostbycat"));
app.use("/api/mostpopular",require("./routes/gets/getpopularnews"));
app.use("/api/lastestnews",require("./routes/gets/getlastestnews"));
app.use("/api/lastbycat",require("./routes/gets/lastbycat"));
app.use("/api/last5",require("./routes/gets/last5"));
