const Project = require("../../models/project");
const { statusCodes } = require("../../utils/statusCodes");

const getProjects = async () => {
  const projects = await Project.find({});

  return {
    message: "Project created successfully",
    projects,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

const addProject = async (project_data) => {
  const project = new Project({
    ...project_data,
  });

  await project.save();

  const projects = await Project.find();

  return {
    message: "Project Added Successfully",
    projects,
    statusCode: statusCodes.SUCCESSFUL.CREATED,
  };
};

const getProject = async (projectSlug) => {
  const project = await Project.findOne({ projectSlug });

  if (!project) {
    throw new apiError(404, "Project not found");
  }

  return {
    project,
    message: "Project retrieved successfully",
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

module.exports = {
  getProjects,
  addProject,
  getProject,
};
