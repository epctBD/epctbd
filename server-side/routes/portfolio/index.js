const express = require("express");
const router = express.Router();
const controller = require("../../controllers/portfolio");
const { upload } = require("../../middlewares/multer.middleware.js");

router.get("/", controller.getPortfolios);
router.post(
  "/",
  upload.fields([
    { name: "pdf_file", maxCount: 1 },
    { name: "feature_image", maxCount: 1 },
  ]),
  controller.addPortfolio
);
router.patch(
  "/:id",
  upload.single("feature_image"),
  controller.updatePortfolio
);
router.delete("/:id", controller.deletePortfolio);

module.exports = router;
