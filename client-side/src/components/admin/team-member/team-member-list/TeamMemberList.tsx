import { ITeamMember, ITeamMemberList } from "@/models/teamMember.model";
import { Image, Table } from "antd";
import React, { useState } from "react";
import AddTeamMember from "../add-team-member/AddTeamMember";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";

interface ITeamMemberListProps {
  teamMembers: ITeamMember[];
  setTeamMembers: React.Dispatch<React.SetStateAction<ITeamMemberList[]>>;
}

const TeamMemberList = ({
  teamMembers,
  setTeamMembers,
}: ITeamMemberListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Ex-Team",
      dataIndex: "isExTeam",
      key: "isExTeam",
      render: (isExTeam: boolean) => (isExTeam ? "Yes" : "No"),
    },
    {
      title: "Profile Picture",
      dataIndex: "display_picture",
      key: "display_picture",
      render: (src: string) => (
        <Image src={src} alt="Profile Picture" width={80} height={80} />
      ),
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>Team Members</h1>
        <CoreButton
          text="Add Team Member"
          type="primary"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div style={{ marginTop: "24px" }}>
        <Table
          dataSource={teamMembers}
          columns={columns}
          rowKey="id"
          bordered
          pagination={{ pageSize: 10 }}
        />

        <AddTeamMember
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setTeamMembers={setTeamMembers}
        />
      </div>
    </div>
  );
};

export default TeamMemberList;
