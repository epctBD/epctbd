const express = require("express");
const router = express.Router();
const controller = require("../../controllers/podcasts");

router.get("/", controller.getPodcasts);
router.post("/", controller.addPodcast);
router.delete("/:id", controller.deletePodcast);

module.exports = router;
