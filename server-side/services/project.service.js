const { asyncHandler } = require("../utils/asyncHandler");
const { statusCodes } = require("../utils/statusCodes");

const addProject = async (project_name) => {
  //run queries here

  console.log(project_name, "project_data");

  return {
    message: "Project created successfully",
    statusCode: statusCodes.SUCCESSFUL.CREATED,
  };
};

module.exports = {
  addProject,
};
