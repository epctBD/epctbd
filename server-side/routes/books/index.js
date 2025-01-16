const express = require("express");
const router = express.Router();
const controller = require("../../controllers/books");
const { upload } = require("../../middlewares/multer.middleware.js");

router.get("/", controller.getBooks);
router.post(
  "/",
  upload.fields([
    { name: "pdf_file", maxCount: 1 },
    { name: "cover_image", maxCount: 1 },
  ]),
  controller.addBook
);
router.delete("/:id", controller.deleteBook);

module.exports = router;
