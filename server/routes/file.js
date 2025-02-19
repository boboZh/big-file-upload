const express = require("express");
const router = express.Router();

const { getFileList } = require("../controller/file");
const { SuccessModel } = require("../model/resModel");

router.get("/list", (req, res, next) => {
  const result = getFileList();
  return result.then((data) => {
    res.json(new SuccessModel(data));
  });
});

module.exports = router;
