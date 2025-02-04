const mongoose = require("mongoose");

const PodcastSchema = new mongoose.Schema(
  {
    podcast_name: {
      type: String,
      required: true,
    },
    podcast_url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Podcast", PodcastSchema);
