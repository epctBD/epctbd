import { ITeamMemberList } from "@/models/teamMember.model";
import { Image, message, Table } from "antd";
import React, { useState } from "react";
import AddTeamMember from "../add-team-member/AddTeamMember";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import UpdateTeamMember from "../update-team-member/UpdateTeamMember";
import DeleteModal from "@/components/common/delete-modal/DeleteModal";
import { deleteTeamMember } from "@/services/teamMember.service";

interface ITeamMemberListProps {
  teamMembers: ITeamMemberList[];
  setTeamMembers: React.Dispatch<React.SetStateAction<ITeamMemberList[]>>;
}

const TeamMemberList = ({
  teamMembers,
  setTeamMembers,
}: ITeamMemberListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ITeamMemberList>();
  const [loading, setLoading] = useState(false);

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
    {
      title: "Actions",
      dataIndex: "_id",
      key: "display_picture",
      render: (id: string, item: ITeamMemberList) => (
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setUpdateModalOpen(true);
              setSelectedItem(item);
            }}
          >
            <EditFilled />
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDeleteModalOpen(true);
              setSelectedItem(item);
            }}
          >
            <DeleteFilled />
          </div>
        </div>
      ),
    },
  ];

  const onDeleteClick = async () => {
    if (!selectedItem) return;

    setLoading(true);
    try {
      const response = await deleteTeamMember(selectedItem._id);
      setTeamMembers(response);

      message.success("Team member deleted successfully!");
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting team member:", error);
      message.error("Failed to delete team member. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          rowKey="_id"
          bordered
          pagination={{ pageSize: 10 }}
        />

        <AddTeamMember
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setTeamMembers={setTeamMembers}
        />

        {updateModalOpen && (
          <UpdateTeamMember
            isModalOpen={updateModalOpen}
            setIsModalOpen={setUpdateModalOpen}
            currentTeam={selectedItem || null}
            setTeamMembers={setTeamMembers}
          />
        )}

        {deleteModalOpen && (
          <DeleteModal
            isModalOpen={deleteModalOpen}
            setIsModalOpen={setDeleteModalOpen}
            onDeleteClick={onDeleteClick}
            isLoading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default TeamMemberList;
