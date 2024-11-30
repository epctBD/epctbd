import { ITeamMember } from "@/models/teamMember.model";
import { useState, useEffect } from "react";

interface IUseTeamMemberProps {
  teams: ITeamMember[]; // Define the expected prop type
}

const useTeamMember = ({ teams }: IUseTeamMemberProps) => {
  const [teamMembers, setTeamMembers] = useState<ITeamMember[]>(teams);

  // If you want to handle re-fetching or any other updates, you can add logic here using useEffect
  useEffect(() => {
    setTeamMembers(teams);
  }, [teams]); // This will update the teamMembers state whenever the teams prop changes

  return teamMembers;
};

export default useTeamMember;
