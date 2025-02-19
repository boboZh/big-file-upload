const File = require("../db/models/File");

const getFileList = () => {
  return new Promise((resolve, reject) => {
    const list = new Array(10).fill(0).map((item, index) => "file" + index);
    resolve(list);
  });
};

module.exports = {
  getFileList,
};
