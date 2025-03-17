const { Schema, model, mongoose } = require("mongoose");
const slugify = require("slugify");

const projectSchema = new Schema(
  {
    projectSlug: {
      type: String,
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
      type: [String],
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
    isFeature: {
      type: Boolean,
      required: true,
    },
    outcome: {
      type: String,
      required: false,
    },
    projectImages: {
      type: [String],
      required: false,
    },
    projectVideo: {
      type: String,
      required: false,
    },
    architect: {
      type: String,
      required: false,
    },
    structuralEngineer: {
      type: String,
      required: false,
    },
  },
  { versionKey: false }
);

// Ensure `projectSlug` is set before saving
projectSchema.pre("save", async function (next) {
  try {
    if (!this.projectSlug || this.isModified("name")) {
      let nameSlug = slugify(this.name || "", {
        lower: true,
        remove: /[*+~.()'"!?:@]/g,
      });

      // Ensure unique slug
      let uniqueSlug = nameSlug;
      let counter = 1;

      // Check if the slug already exists in the database
      const existingProject = await mongoose
        .model("Project")
        .findOne({ projectSlug: uniqueSlug });

      while (existingProject) {
        uniqueSlug = `${nameSlug}-${counter}`;
        counter++;
      }

      this.projectSlug = uniqueSlug;
    }
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = model("Project", projectSchema);
