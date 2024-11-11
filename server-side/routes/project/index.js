const express = require("express");
const router = express.Router();
const controller = require("../../controllers/projects/project.controller");

// const multer = require("multer");
// const checkAuth = require("../../middlewares/common/check-auth");
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

router.get("/", controller.getProjects);
router.post("/", controller.addProject);

module.exports = router;
