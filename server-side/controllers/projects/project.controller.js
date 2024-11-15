const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const { asyncHandler } = require("../../utils/asyncHandler");
const projectService = require("../../services/project.service");

const getProjects = asyncHandler(async (req, res) => {
  new apiResponse(res, 200, "Project fetcehd", []);
});

const addProject = asyncHandler(async (req, res) => {
  //validate here
  const { project_name } = req.body;

  if (!project_name) {
    throw new apiError(400, "Project Name is missing");
  }

  const { message, statusCode } = await projectService.addProject(project_name);

  new apiResponse(res, statusCode, message, project_name);
});

module.exports = {
  getProjects,
  addProject,
};
