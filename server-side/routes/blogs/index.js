const express = require("express");
const router = express.Router();
const controller = require("../../controllers/blogs");
const { upload } = require("../../middlewares/multer.middleware.js");

router.get("/", controller.getAllBlogs);
router.get("/:slug", controller.getBlogBySlug);
router.post("/", upload.single("thumbnail"), controller.addBlog);
router.patch("/:slug", upload.single("thumbnail"), controller.updateBlog);
router.delete("/:slug", controller.deleteBlog);

module.exports = router;
