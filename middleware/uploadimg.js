const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + uuidv4(); // Generate a unique suffix
    const ext = path.extname(file.originalname); // Get the file extension
    const baseName = path.basename(file.originalname, ext); // Get the file name without extension
    cb(null, `${baseName}-${uniqueSuffix}${ext}`); // Append the unique suffix to the file name
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
