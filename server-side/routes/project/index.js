const express = require("express");
const router = express.Router();
const controller = require("../../controllers/projects");
const { upload } = require("../../middlewares/multer.middleware.js");

router.get("/", controller.getProjects);
router.post("/", upload.array("projectImages"), controller.addProject);
router.patch("/:id", upload.array("projectImages"), controller.updateProject);
router.get("/:projectSlug", controller.getProject);
router.delete("/:id", controller.deleteProject);

module.exports = router;
