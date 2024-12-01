const teamService = require("../../services/team-member");
const { apiError } = require("../../utils/apiError");
const { apiResponse } = require("../../utils/apiResponse");
const { asyncHandler } = require("../../utils/asyncHandler");
const { singleUpload } = require("../../utils/cloudinary");

const addTeamMember = asyncHandler(async (req, res) => {
  const { name, position, isExTeam, facebook, twitter, linkedin } = req.body;

  if (!name || !position) {
    new apiError(400, "Please provide the required information");
  }

  let display_picture = null;

  if (req.file) {
    try {
      display_picture = await singleUpload(req.file);
    } catch (error) {
      return new apiError(500, "Image upload failed");
    }
  }

  const member_data = {
    name,
    position,
    isExTeam: isExTeam == "true" ? true : false,
    display_picture: display_picture,
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
    existing_image_link,
  } = req.body;

  if (!name || !position) {
    new apiError(400, "Please provide the required information");
  }

  let display_picture = null;

  if (req.file) {
    try {
      display_picture = await singleUpload(req.file);
    } catch (error) {
      return new apiError(500, "Image upload failed");
    }
  }

  if (existing_image_link) {
    display_picture = existing_image_link;
  } else {
    try {
      display_picture = await singleUpload(req.file);
    } catch (error) {
      return new apiError(500, "Image upload failed");
    }
  }

  const member_data = {
    name,
    position,
    isExTeam: isExTeam == "true" ? true : false,
    display_picture: display_picture,
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
