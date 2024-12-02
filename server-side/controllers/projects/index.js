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

module.exports = {
  getProjects,
  addProject,
  getProject,
};
