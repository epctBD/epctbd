const Team = require("../../models/team-member");
const { statusCodes } = require("../../utils/statusCodes");

const addTeamMember = async (member_data) => {
  const team = new Team({
    ...member_data,
  });

  team.save();

  return {
    message: "Team Member Added Successfully",
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

const deleteTeamMember = async (team_member_id) => {
  const team = await Team.findById(team_member_id);

  if (!team) {
    return {
      message: "Team not found",
      statusCode: statusCodes.CLIENT_ERROR.BAD_REQUEST,
    };
  }

  await Team.findByIdAndDelete(team_member_id);

  return {
    message: "Team Member deleted successfully",
    statusCode: statusCodes.SUCCESSFUL.SUCCESS,
  };
};

const updateTeamMember = async (team_member_id, member_data) => {
  const team = await Team.findById(team_member_id);

  if (!team) {
    return {
      message: "Team not found",
      statusCode: statusCodes.CLIENT_ERROR.BAD_REQUEST,
    };
  }

  console.log(team, "member_data");

  await Team.findByIdAndUpdate(team_member_id, member_data, {
    new: true,
  });

  return {
    message: "Team Member Updated Successfully",
    statusCode: statusCodes.SUCCESSFUL.CREATED,
  };
};

module.exports = {
  addTeamMember,
  getTeamMembers,
  deleteTeamMember,
  updateTeamMember,
};
