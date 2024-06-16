const router = require("express").Router();
const connection = require("../../db/dbconnection.js");
const { body, validationResult } = require("express-validator");
const util = require("util"); // helper
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const admin = require("../../middleware/admin");
const upload = require("../../middleware/uploadimg.js"); // Import the Multer configuration

// function create ads
router.post("/", admin, upload.single("ads_img"), async (req, res) => {
  // get input
  const { name, description, ad_category } = req.body;

  try {
    const query = util.promisify(connection.query).bind(connection);

    // Log request data for debugging
    console.log("Request Body:", req.body);
    console.log("File:", req.file);

    // Get the uploaded file's path
    const ads_img_path = req.file ? req.file.path.replace(/\\/g, '/') : null; // Replace backslashes with forward slashes

    // Prepare the object to insert it in the database
    const adsobj = {
      name: name,
      description: description,
      ads_img: "/root/home/elfarama_server/htdocs/api.elfarama.com/"+ads_img_path, // Save the relative file path
      ad_category: ad_category,
    };

    // Insert it into the database
    await query("insert into ads set ?", adsobj);
    res.status(200).json(adsobj);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;

