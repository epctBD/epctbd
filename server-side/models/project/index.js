const { Schema, model } = require("mongoose");
const slugify = require("slugify");

const projectSchema = new Schema(
  {
    projectSlug: {
      type: String,
      required: false,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: false,
    },
    projectYear: {
      type: Boolean,
      required: false,
    },
    designer: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    projectOverview: {
      type: String,
      required: false,
    },
    keyFeatures: {
      type: String,
      required: false,
    },
    outcome: {
      type: String,
      required: false,
    },
    projectImages: {
      type: [String],
      required: false,
    },
  },
  { versionKey: false }
);

projectSchema.pre("save", function (next) {
  // Slugify the category name
  const categorySlug = slugify(this.category, {
    lower: true,
    remove: /[*+~.()'"!?:@]/g,
  });

  // Slugify the project name
  const nameSlug = slugify(this.name, {
    lower: true,
    remove: /[*+~.()'"!?:@]/g,
  });

  // Combine all parts to create the final slug
  this.projectSlug = `${categorySlug}-${nameSlug}`;

  next();
});

// Create an index on the projectSlug field
projectSchema.index({ projectSlug: 1 }, { unique: true });

module.exports = model("Project", projectSchema);
