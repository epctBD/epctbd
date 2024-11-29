const express = require("express");
const router = express.Router();
const controller = require("../../controllers/team-member");
const { upload } = require("../../middlewares/multer.middleware.js");

router.get("/", controller.getTeamMembers);
router.post("/", upload.single("display_picture"), controller.addTeamMember);
router.patch(
  "/:member_id",
  upload.single("display_picture"),
  controller.updateTeamMember
);
router.delete("/:member_id", controller.deleteTeamMember);

module.exports = router;
