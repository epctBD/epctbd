const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const { asyncHandler } = require("../../utils/asyncHandler");

const getProjects = asyncHandler(async (req, res) => {
  new apiResponse(res, 200, "Project fetcehd", []);
});

const addProject = asyncHandler(async (req, res) => {
  const { project_name } = req.body;

  if (!project_name) {
    throw new apiError(400, "Project Name is missing");
  }

  new apiResponse(res, 200, "Project Added", project_name);
});

module.exports = {
  getProjects,
  addProject,
};
