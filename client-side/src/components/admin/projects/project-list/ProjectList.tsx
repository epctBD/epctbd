import { IProject } from "@/models/project.model";
import { Image, message, Table } from "antd";
import React, { useState } from "react";

import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import AddProject from "../add-projects/AddProjects";
import UpdateProject from "../update-project/UpdateProject";
import DeleteModal from "@/components/common/delete-modal/DeleteModal";
import { deleteProject } from "@/services/project.service";
import PenIcon from "@/components/common/svg/PenIcon";
import TrashBinIcon from "@/components/common/svg/TrashBinIcon";
import { PlusOutlined } from "@ant-design/icons";

interface IProjectListProps {
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}

const ProjectList = ({ projects, setProjects }: IProjectListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IProject>();
  const [loading, setLoading] = useState(false);

  const onDeleteClick = async () => {
    if (!selectedItem) return;

    setLoading(true);
    try {
      const response = await deleteProject(selectedItem._id);
      setProjects(response);

      message.success("Team member deleted successfully!");
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting project:", error);
      message.error("Failed to delete project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Project Image",
      dataIndex: "projectImages",
      key: "projectImages",
      render: (projectImages: string[], project: IProject) => (
        <Image
          src={
            project?.category === "Government Projects"
              ? "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736882114/samples/ecommerce/car-interior-design.jpg"
              : projectImages[0]
          }
          alt="Project Image"
          width={80}
          height={80}
        />
      ),
    },
    {
      title: "Actions",
      dataIndex: "_id",
      key: "display_picture",
      render: (id: string, item: IProject) => (
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            style={{
              cursor: "pointer",
              padding: "7px",
              border: "1px solid #D1F4DB",
              backgroundColor: "#E8FAED",
              borderRadius: "50%",
              height: "24px",
              width: "24px",
            }}
            onClick={() => {
              setUpdateModalOpen(true);
              setSelectedItem(item);
            }}
          >
            <PenIcon />
          </div>
          <div
            style={{
              cursor: "pointer",
              padding: "7px",
              border: "1px solid #FDD0D5",
              backgroundColor: "#FEE7EA",
              borderRadius: "50%",
              height: "24px",
              width: "24px",
            }}
            onClick={() => {
              setDeleteModalOpen(true);
              setSelectedItem(item);
            }}
          >
            <TrashBinIcon />
          </div>
        </div>
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
        <h1 style={{ fontSize: "20px" }}>Projects</h1>
        <CoreButton
          text="Project"
          icon={<PlusOutlined />}
          type="primary"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div style={{ marginTop: "24px" }}>
        <Table
          dataSource={projects}
          columns={columns}
          rowKey="_id"
          bordered
          pagination={false}
        />

        <AddProject
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setProjects={setProjects}
        />

        {updateModalOpen && (
          <UpdateProject
            isModalOpen={updateModalOpen}
            setIsModalOpen={setUpdateModalOpen}
            project={selectedItem || null}
            setProjects={setProjects}
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

export default ProjectList;
