import AdminLayout from "@/components/layout/admin-layout/AdminLayout";
import { ITeamMemberList } from "@/models/teamMember.model";
import { getTeamMembers } from "@/services/teamMember.service";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const TeamMemberList = dynamic(
  () =>
    import("@/components/admin/team-member/team-member-list/TeamMemberList"),
  {
    ssr: false,
  }
);

interface ITeamMemberProps {
  team: ITeamMemberList[];
}

const TeamMember = ({ team }: ITeamMemberProps) => {
  const [teamMembers, setTeamMembers] = useState<ITeamMemberList[]>(team);
  return (
    <AdminLayout>
      <TeamMemberList
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
      />
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getTeamMembers();
    return {
      props: {
        team: response,
      },
    };
  } catch (error) {
    console.error("Error fetching team members:", error);
    return {
      props: {
        team: [],
      },
    };
  }
};

export default TeamMember;
