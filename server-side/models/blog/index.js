const mongoose = require("mongoose");
const slugify = require("slugify");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    tag: { type: String, required: true },
    thumbnail: { type: String, required: true },
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

blogSchema.pre("save", function (next) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

module.exports = mongoose.model("Blog", blogSchema);
