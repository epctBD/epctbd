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
  } = req.body;

  if (!name || !details || !category || !serviceType || !isFeature) {
    throw new apiError(400, "Please provide all required information");
  }

  let projectImages = [];

  if (req.files && req.files.length > 0) {
    try {
      projectImages = await multipleUpload(req.files);
    } catch (error) {
      throw new apiError(500, "Image upload failed");
    }
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

  if (!projectImages) {
    throw new apiError(400, "Please provide project images");
  }

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
    existing_image_links,
    isFeature,
    serviceType,
    projectVideo,
    architect,
    structuralEngineer,
  } = req.body;

  if (!id) {
    throw new apiError(400, "Project ID is required");
  }

  if (!name || !details || !category || !serviceType || !isFeature) {
    throw new apiError(400, "Please provide all required information");
  }

  let newProjectImageLinks = [];

  if (req.files && req.files.length > 0) {
    try {
      newProjectImageLinks = await multipleUpload(req.files);
    } catch (error) {
      return new apiError(500, "Image upload failed");
    }
  }

  const validNewProjectImageLinks = Array.isArray(newProjectImageLinks)
    ? newProjectImageLinks.filter(
        (link) => typeof link === "string" && link.startsWith("http")
      )
    : [];

  const validExistingImageLinks = Array.isArray(existing_image_links)
    ? existing_image_links.filter(
        (link) => typeof link === "string" && link.startsWith("http")
      )
    : typeof existing_image_links === "string" &&
      existing_image_links.startsWith("http")
    ? [existing_image_links]
    : [];

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
    isFeature,
    serviceType,
    projectVideo,
    architect,
    structuralEngineer,
    projectImages: [...validExistingImageLinks, ...validNewProjectImageLinks],
  };

  if (!update_Data?.projectImages) {
    throw new apiError(400, "Please provide project images");
  }

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
