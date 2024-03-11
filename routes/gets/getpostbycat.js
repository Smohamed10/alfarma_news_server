const router = require("express").Router();
const connection = require('../../db/dbConnection');
const { body , validationResult } = require('express-validator');
const util = require("util"); // helper 
const bcrypt = require("bcrypt");
const crypto = require("crypto");

// function get all news by category 
router.get("/",body("catName"),async(req,res)=>{
    const query = util.promisify(connection.query).bind(connection) // transform query to promise to can use await/ async
    try
    {
       const newsobj = await query("select * from news where category = ?",req.body.catName);
       if(newsobj[0])
       {
          res.status(200).json(newsobj);
       }
       else
       {
        res.status(404).json("THE CATEGORY DONT HAVE ANY NEWSSS...")
       }
    }
    catch(err)
    {
        res.status(404).json(err)
    }
})

module.exports = router;
