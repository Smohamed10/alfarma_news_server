const router = require("express").Router();
const connection = require("../../db/dbconnection.js");
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const admin = require("../../middleware/admin");
const upload = require("../../middleware/uploadimg.js");

// function create news
router.post("/", admin, upload.single("pic_path"), async (req, res) => {
  // get input
  const { writer_name, name, content, category, publicID } = req.body;
  try {
    const query = util.promisify(connection.query).bind(connection); // transform query to promise to can use await/ async
    // get the current time
    function getCurrentDateInCairo() {
      const options = {
        timeZone: "Africa/Cairo",
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };

      return new Date().toLocaleString("en-US", options);
    }
    const time2 = getCurrentDateInCairo();

    // Replace backslashes with forward slashes in the file path
    const pic_path = req.file ? req.file.path.replace(/\\/g, "/") : null;

    const newsobj = {
      writer_name: writer_name,
      name: name,
      content: content,
      category: category,
      pic_path: `"/home/elfarama_server/htdocs/api.elfarama.com/${pic_path}"`,
      time: time2,
      publicID: publicID,
    };
    // insert the object in data base
    await query("insert into news set ? ", newsobj);
    res.status(200).json(newsobj);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
