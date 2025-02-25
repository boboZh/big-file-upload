const path = require("path");
const mime = require("mime");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    console.log("filename: ", file);
    const fileName = `${file.filename}-${Date.now()}.${mime.getExtension(
      file.mimetype
    )}`;
    cb(null, fileName);
  },
});

const upload = multer({
  storage,
});

module.exports = {
  upload,
};
