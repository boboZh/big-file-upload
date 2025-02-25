const express = require("express");
const { route } = require(".");
const router = express.Router();
const { uploadFile } = require("../diskStorage/index");
// const { upload } = require("../middleware/uploadFile");

const { getFileList } = require("../controller/file");
const { SuccessModel, ErrorModel } = require("../model/resModel");

router.get("/list", (req, res, next) => {
  const result = getFileList();
  return result.then((data) => {
    res.json(new SuccessModel(data));
  });
});

// router.get("/add", (req, res, next) => {
//   const result = addFile();
//   return result.then((data) => {
//     res.json(new SuccessModel(data));
//   });
// });
router.post("/add", (req, res, next) => {
  console.log("ctx: ", req.body);
  return Promise.resolve(res.json(new SuccessModel(JSON.stringify(req.body))));
});
router.post("/upload", uploadFile, async (req, res, next) => {
  const fieldName = req.file.originalname;
  const file = upload.single(fieldName);
  if (!file) {
    return new ErrorModel(null, "文件为空");
  } else {
    return res.json(
      new SuccessModel(
        {
          url:
            `http://localhost:${process.env.PORT || "3000"}` +
            "/images/" +
            req.file.originalname,
        },
        "上传成功"
      )
    );
  }
  const result = uploadFile();
  return result.then((data) => {
    res.json(new SuccessModel("上传成功"));
  });
});
module.exports = router;
