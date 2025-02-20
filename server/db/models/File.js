const mongoose = require("../db");

const FileSchema = mongoose.Schema(
  {
    url: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const File = mongoose.model("file", FileSchema);

module.exports = File;
