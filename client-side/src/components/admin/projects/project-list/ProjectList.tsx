import { IProject } from "@/models/project.model";
import { Image, Table } from "antd";
import React, { useState } from "react";

import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import AddProject from "../add-projects/AddProjects";

interface IProjectListProps {
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}

const ProjectList = ({ projects, setProjects }: IProjectListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      </div>
    </div>
  );
};

export default ProjectList;
