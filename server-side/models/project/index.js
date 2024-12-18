const { Schema, model } = require("mongoose");
const slugify = require("slugify");

const projectSchema = new Schema(
  {
    projectSlug: {
      type: String,
      required: true, // Slug should always be generated
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
      type: String,
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

// Ensure `projectSlug` is set before saving
projectSchema.pre("save", function (next) {
  try {
    if (
      !this.projectSlug ||
      this.isModified("name") ||
      this.isModified("category")
    ) {
      // Slugify the category
      const categorySlug = slugify(this.category || "", {
        lower: true,
        remove: /[*+~.()'"!?:@]/g,
      });

      // Slugify the name
      const nameSlug = slugify(this.name || "", {
        lower: true,
        remove: /[*+~.()'"!?:@]/g,
      });

      // Combine to create the final slug
      this.projectSlug = `${categorySlug}-${nameSlug}`;
    }
    next();
  } catch (error) {
    next(error);
  }
});

// Ensure the index is created once and only in the schema definition
projectSchema.index({ projectSlug: 1 }, { unique: true });

module.exports = model("Project", projectSchema);
