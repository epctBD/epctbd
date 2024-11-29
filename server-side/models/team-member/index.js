const { Schema, default: mongoose, model } = require("mongoose");

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    display_picture: {
      type: String,
      required: false,
    },
    position: {
      type: String,
      required: true,
    },
    isExTeam: {
      type: Boolean,
      required: false,
    },
    facebook: {
      type: String,
      required: false,
    },
    twitter: {
      type: String,
      required: false,
    },
    linkedin: {
      type: String,
      required: false,
    },
  },
  { versionKey: false }
);

module.exports = model("TeamMember", teamSchema);
