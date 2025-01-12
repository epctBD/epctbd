const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    book_name: {
      type: String,
      required: true,
    },
    author_name: {
      type: String,
      required: true,
    },
    pdf_file: {
      type: String,
      required: true,
    },
    cover_image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);
