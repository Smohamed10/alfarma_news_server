const router = require("express").Router();
const connection = require("../../db/dbconnection.js");
const util = require("util");
const admin = require("../../middleware/admin");

// Endpoint for handling image uploads
router.post("/upload", admin, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    // Save the file path or URL to the database and return the URL
    const filePath = req.file.path; // Adjust this based on your server setup
    res.status(200).json({ url: `http://api.elfarama.com.com/${filePath}` }); // Adjust the URL
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Endpoint for creating news
router.post("/", admin, async (req, res) => {
  const { writer_name, name, content, category, pic_path, publicID } = req.body;
  try {
    const query = util.promisify(connection.query).bind(connection);
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

    // Modify the news object to include the image URL
    const newsobj = {
      writer_name,
      name,
      content,
      category,
      pic_path, // Use the image URL received from the frontend
      time: time2,
      publicID,
    };

    // Insert the object into the database
    await query("INSERT INTO news SET ?", newsobj);
    res.status(200).json(newsobj);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
