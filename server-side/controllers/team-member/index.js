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

  const { message, statusCode } = await teamService.addTeamMember(member_data);

  new apiResponse(res, statusCode, message);
});

const getTeamMembers = asyncHandler(async (req, res) => {
  const { message, team_members, statusCode } =
    await teamService.getTeamMembers();

  new apiResponse(res, statusCode, message, team_members);
});

const updateTeamMember = async (req, res) => {
  const { team_member_id } = req.params;
  const { member_name, position, isWorker, member_image_link } = req.body;

  if (!member_name || !position || !isWorker) {
    return res.status(400).json({
      message: "Please provide the required information",
    });
  }

  let member_photo;

  if (member_image_link) {
    member_photo = member_image_link;
  } else {
    const photoService = new PhotoService(req.file);
    await photoService
      .upload()
      .then((link) => {
        member_photo = link;
      })
      .catch((error) => {
        console.error("Error uploading photo:", error);
      });
  }

  const member_data = {
    member_name,
    position,
    isWorker: isWorker == "true" ? true : false,
    member_image: member_photo,
  };

  const { message, statusCode } = await teamService.updateTeamMember(
    team_member_id,
    member_data
  );

  res.status(statusCode).json({
    message,
  });
};

const deleteTeamMember = async (req, res) => {
  const { team_member_id } = req.params;

  if (!team_member_id) {
    return res.status(400).json({
      message: "Please provide a team member id",
    });
  }

  const { message, statusCode } = await teamService.deleteTeamMember(
    team_member_id
  );

  res.status(statusCode).json({
    message,
  });
};

module.exports = {
  addTeamMember,
  getTeamMembers,
  deleteTeamMember,
  updateTeamMember,
};
