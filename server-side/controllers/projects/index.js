const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const projectService = require("../../services/project");
const { asyncHandler } = require("../../utils/asyncHandler");
const { multipleUpload } = require("../../utils/cloudinary");

const getProjects = asyncHandler(async (req, res) => {
  const { category } = req.query;
  const { message, projects, statusCode } = await projectService.getProjects(
    category
  );

  new apiResponse(res, statusCode, message, projects);
});

const addProject = asyncHandler(async (req, res) => {
  const {
    name,
    details,
    category,
    serviceType,
    area,
    projectYear,
    designer,
    location,
    projectOverview,
    keyFeatures,
    outcome,
    isFeature,
    projectVideo,
    architect,
    structuralEngineer,
    projectImages,
  } = req.body;

  if (
    !name ||
    !details ||
    !category ||
    !serviceType ||
    isFeature === undefined
  ) {
    throw new apiError(400, "Please provide all required information");
  }

  if (
    !category ||
    (Array.isArray(category) && category.length === 0) ||
    (typeof category === "string" && !category.trim())
  ) {
    throw new apiError(
      400,
      "Category must be a non-empty string or an array with at least one item"
    );
  }

  if (!projectImages || projectImages.length === 0) {
    throw new apiError(400, "Please provide project images");
  }

  const project_data = {
    name,
    details,
    category,
    serviceType,
    area,
    projectYear,
    designer,
    location,
    projectOverview,
    keyFeatures,
    outcome,
    projectImages,
    isFeature,
    projectVideo,
    architect,
    structuralEngineer,
  };

  const { message, projects, statusCode } = await projectService.addProject(
    project_data
  );

  new apiResponse(res, statusCode, message, projects);
});

const getProject = asyncHandler(async (req, res) => {
  const { projectSlug } = req.params;

  if (!projectSlug) {
    throw new apiError(400, "Project slug is required");
  }

  const { project, message, statusCode } = await projectService.getProject(
    projectSlug
  );

  new apiResponse(res, statusCode, message, project);
});

const updateProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const {
    name,
    details,
    category,
    area,
    projectYear,
    designer,
    location,
    projectOverview,
    keyFeatures,
    outcome,
    projectImages,
    isFeature,
    serviceType,
    projectVideo,
    architect,
    structuralEngineer,
  } = req.body;

  if (!id) {
    throw new apiError(400, "Project ID is required");
  }

  if (
    !name ||
    !details ||
    !category ||
    !serviceType ||
    typeof isFeature === "undefined"
  ) {
    throw new apiError(400, "Please provide all required information");
  }

  if (
    !category ||
    (Array.isArray(category) && category.length === 0) ||
    (typeof category === "string" && !category.trim())
  ) {
    throw new apiError(
      400,
      "Category must be a non-empty string or an array with at least one item"
    );
  }

  const validProjectImages = Array.isArray(projectImages)
    ? projectImages.filter(
        (link) => typeof link === "string" && link.startsWith("http")
      )
    : typeof projectImages === "string" && projectImages.startsWith("http")
    ? [projectImages]
    : [];

  if (validProjectImages.length === 0) {
    throw new apiError(400, "Please provide at least one valid project image");
  }

  const update_Data = {
    name,
    details,
    category,
    area,
    projectYear,
    designer,
    location,
    projectOverview,
    keyFeatures,
    outcome,
    isFeature: isFeature === "true" || isFeature === true,
    serviceType,
    projectVideo,
    architect,
    structuralEngineer,
    projectImages: validProjectImages,
  };

  const { message, projects, statusCode } = await projectService.updateProject(
    id,
    update_Data
  );

  new apiResponse(res, statusCode, message, projects);
});

const deleteProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) {
    throw new apiError(400, "Project ID is required");
  }

  const { message, projects, statusCode } = await projectService.deleteProject(
    id
  );

  new apiResponse(res, statusCode, message, projects);
});

module.exports = {
  getProjects,
  addProject,
  getProject,
  updateProject,
  deleteProject,
};
