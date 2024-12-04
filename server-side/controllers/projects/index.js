const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const projectService = require("../../services/project");
const { asyncHandler } = require("../../utils/asyncHandler");
const { multipleUpload } = require("../../utils/cloudinary");

const getProjects = asyncHandler(async (req, res) => {
  const { message, projects, statusCode } = await projectService.getProjects();

  console.log(message, "statusCode");

  new apiResponse(res, statusCode, message, projects);
});

const addProject = asyncHandler(async (req, res) => {
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
  } = req.body;

  if (!name || !details || !category) {
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
    area,
    projectYear,
    designer,
    location,
    projectOverview,
    keyFeatures,
    outcome,
    projectImages,
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

  console.log(id, "id");
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
  } = req.body;

  if (!id) {
    throw new apiError(400, "Project ID is required");
  }

  let newProjectImageLinks = [];

  if (req.files && req.files.length > 0) {
    try {
      newProjectImageLinks = await multipleUpload(req.files);
    } catch (error) {
      return new apiError(500, "Image upload failed");
    }
  } else {
    return new apiError(400, "Feature image is required");
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
    projectImages: [...validExistingImageLinks, ...validNewProjectImageLinks],
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
