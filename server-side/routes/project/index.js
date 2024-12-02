const express = require("express");
const router = express.Router();
const controller = require("../../controllers/projects");
const { upload } = require("../../middlewares/multer.middleware.js");

// const multer = require("multer");
// const checkAuth = require("../../middlewares/common/check-auth");
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

router.get("/", controller.getProjects);
router.post("/", upload.array("projectImages"), controller.addProject);
router.get("/:projectSlug", controller.getProject);

module.exports = router;
