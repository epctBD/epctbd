const express = require("express");
const router = express.Router();
const controller = require("../../controllers/portfolio");
const { upload } = require("../../middlewares/multer.middleware.js");

router.get("/", controller.getPortfolios);
router.post("/", upload.single("feature_image"), controller.addPortfolio);
router.patch(
  "/:id",
  upload.single("feature_image"),
  controller.updatePortfolio
);
router.delete("/:id", controller.deletePortfolio);

module.exports = router;
