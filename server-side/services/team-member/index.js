const Team = require("../../models/team-member");
const { statusCodes } = require("../../utils/statusCodes");

const addTeamMember = async (member_data) => {
  const team = new Team({
    ...member_data,
  });

  await team.save();
  const team_members = await Team.find();

  return {
    message: "Team Member Added Successfully",
    team_members,
    statusCode: statusCodes.SUCCESSFUL.CREATED,
  };
};

const getTeamMembers = async () => {
  const team_members = await Team.find({});

  if (team_members.length === 0) {
    return {
      message: "No Team Member Found",
      team_members,
      statusCode: statusCodes.SUCCESSFUL.SUCCESS,
    };
  }

  return {
    message: "Team Member Featched Successfully",
    team_members,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

const deleteTeamMember = async (member_id) => {
  const team = await Team.findById(member_id);

  if (!team) {
    return {
      message: "Team member not found",
      statusCode: statusCodes.CLIENT_ERROR.BAD_REQUEST,
    };
  }

  await Team.findByIdAndDelete(member_id);

  const team_members = await Team.find();

  return {
    message: "Team Member deleted successfully",
    team_members,
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

const updateTeamMember = async (member_id, member_data) => {
  const team = await Team.findById(member_id);

  if (!team) {
    return {
      message: "Team member not found",
      statusCode: statusCodes.CLIENT_ERROR.BAD_REQUEST,
    };
  }

  await Team.findByIdAndUpdate(member_id, member_data, {
    new: true,
  });

  const team_members = await Team.find();

  return {
    message: "Team Member Updated Successfully",
    team_members,
    statusCode: statusCodes.SUCCESSFUL.CREATED,
  };
};

module.exports = {
  addTeamMember,
  getTeamMembers,
  deleteTeamMember,
  updateTeamMember,
};
