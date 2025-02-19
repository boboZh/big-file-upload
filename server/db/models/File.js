const mongoose = require("../db");

const FileSchema = mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
  },
  {
    timeStamps: true,
  }
);

const File = mongoose.model("file", FileSchema);

module.exports = File;
