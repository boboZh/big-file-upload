const path = require("path");
const mime = require("mime");
const multer = require("multer");

// 存储到本地磁盘
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    console.log("filename: ", req, file);
    const fileName = `${file.filename}-${Date.now()}.${mime.getExtension(
      file.mimetype
    )}`;
    cb(null, fileName);
  },
});

// 限制大小
const limits = {
  fileSize: 1024 * 200,
  // fields: 1
};

// 文件类型过滤
function fileFilter(req, file, cb) {
  const whitelist = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/webp",
    "image/gif",
  ];

  if (whitelist.includes(file.mimetype)) {
    // 接受这个文件，使用`true`，像这样:
    cb(null, true);
  } else {
    // 拒绝这个文件，使用`false`，像这样:
    // cb(null, false)
    // // 如果有问题，你可以总是这样发送一个错误:
    cb(new Error("图片格式仅支持：jpg/jpeg/png/gif/webp"));
  }
}

const upload = multer({
  storage,
  limits,
  fileFilter,
}).single("companyLogo");

exports.uploadFile = (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // 发生错误
      let msg =
        err.message === "File too large"
          ? "图片大小不得超出 200k."
          : err.message;
      res.render("fail", {
        data: JSON.stringify({ massage: msg }),
      });
    } else if (err) {
      // 发生错误
      res.render("fail", {
        data: JSON.stringify({ massage: err.message }),
      });
    } else {
      // 一切都好
      next();
    }
  });
};

// const multer = require("multer");
// const path = require("path");

// // 设置存储引擎
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images/");
//   },
//   filename: (req, file, cb) => {
//     console.log("filename middleware: ", file);
//     cb(null, path.extname(file.originalname));
//   },
// });
// // 配置multer
// const upload = multer({
//   storage: storage,
// });

// module.exports = {
//   upload,
// };
