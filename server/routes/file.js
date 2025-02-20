const express = require("express");
const { route } = require(".");
const router = express.Router();

const { getFileList, addFile } = require("../controller/file");
const { SuccessModel } = require("../model/resModel");

router.get("/list", (req, res, next) => {
  const result = getFileList();
  return result.then((data) => {
    res.json(new SuccessModel(data));
  });
});

router.get("/add", (req, res, next) => {
  const result = addFile();
  return result.then((data) => {
    res.json(new SuccessModel(data));
  });
});
module.exports = router;
