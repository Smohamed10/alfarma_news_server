const router = require("express").Router();
const connection = require("../../db/dbconnection");
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const authorized = require("../../middleware/authorized");


//======= function increment the rate of post when get the post =====//
router.get("/",async(req,res)=>{
    const query = util.promisify(connection.query).bind(connection); // transform query to promise to can use await/ async
    const adspost=  await query ("select * from ads ");
    res.status(202).json(adspost);
    
})


module.exports = router;