import { IProject } from "@/models/project.model";
import { Image, Table } from "antd";
import React, { useState } from "react";

import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import AddProject from "../add-projects/AddProjects";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import UpdateProject from "../update-project/UpdateProject";
import DeleteModal from "@/components/common/delete-modal/DeleteModal";

interface IProjectListProps {
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}

const ProjectList = ({ projects, setProjects }: IProjectListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IProject>();

  const onDeleteClick = async () => {
    if (!selectedItem) return;
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
      render: (projectImages: string[]) => (
        <Image
          src={projectImages[0]}
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
        <h1>Projects</h1>
        <CoreButton
          text="Add Project"
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
          pagination={{ pageSize: 10 }}
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
            isLoading={false}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectList;
