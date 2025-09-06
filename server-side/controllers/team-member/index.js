const teamService = require("../../services/team-member");
const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const { asyncHandler } = require("../../utils/asyncHandler");
const { singleUpload } = require("../../utils/cloudinary");

const addTeamMember = asyncHandler(async (req, res) => {
  const {
    name,
    position,
    isExTeam,
    facebook,
    twitter,
    linkedin,
    display_picture, // now expected as Cloudinary URL string
  } = req.body;

  if (!name || !position) {
    throw new apiError(400, "Please provide the required information");
  }

  const member_data = {
    name,
    position,
    isExTeam: isExTeam === "true" || isExTeam === true, // handle both string/boolean
    display_picture, // Cloudinary URL string from frontend
    facebook,
    twitter,
    linkedin,
  };

  const { message, team_members, statusCode } = await teamService.addTeamMember(
    member_data
  );

  new apiResponse(res, statusCode, message, team_members);
});

const getTeamMembers = asyncHandler(async (req, res) => {
  const { message, team_members, statusCode } =
    await teamService.getTeamMembers();

  new apiResponse(res, statusCode, message, team_members);
});

const updateTeamMember = asyncHandler(async (req, res) => {
  const { member_id } = req.params;

  const {
    name,
    position,
    isExTeam,
    facebook,
    twitter,
    linkedin,
    display_picture, // now expected as Cloudinary URL string
  } = req.body;

  if (!name || !position) {
    throw new apiError(400, "Please provide the required information");
  }

  const member_data = {
    name,
    position,
    isExTeam: isExTeam === "true" || isExTeam === true, // handle both string/boolean
    display_picture, // Cloudinary URL from frontend
    facebook,
    twitter,
    linkedin,
  };

  const { message, team_members, statusCode } =
    await teamService.updateTeamMember(member_id, member_data);

  new apiResponse(res, statusCode, message, team_members);
});

const deleteTeamMember = asyncHandler(async (req, res) => {
  const { member_id } = req.params;

  if (!member_id) {
    new apiError(400, "Please provide a team member id");
  }

  const { message, team_members, statusCode } =
    await teamService.deleteTeamMember(member_id);

  new apiResponse(res, statusCode, message, team_members);
});

module.exports = {
  addTeamMember,
  getTeamMembers,
  deleteTeamMember,
  updateTeamMember,
};
