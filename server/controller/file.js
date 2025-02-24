const File = require("../db/models/File");

const getFileList = () => {
  return new Promise(async (resolve, reject) => {
    //const list = new Array(10).fill(0).map((item, index) => "file" + index);
    const list = await File.find();
    resolve(list);
  });
};

const uploadFile = () => {
  return new Promise((resolve, reject) => {});
};

const addFile = () => {
  return new Promise((resolve, reject) => {
    const url = "/public/images/test";
    const id = "2025-02-20-17-02";
    File.create({
      id,
      url,
    }).then((res) => {
      console.log("create res: ", res);
      resolve(res);
    });
  });
};

module.exports = {
  getFileList,
  addFile,
  uploadFile,
};
