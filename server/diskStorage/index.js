// import multer from "multer";

// import path from "path";

const multer = require("multer");
const path = require("path");

// 设置存储引擎
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/");
  },
  filename: (req, file, cb) => {
    console.log("filename middleware: ", file);
    cb(null, path.extname(file.originalname));
  },
});
// 配置multer
const upload = multer({
  storage: storage,
});

module.exports = {
  upload,
};
