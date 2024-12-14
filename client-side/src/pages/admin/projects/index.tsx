import AdminLayout from "@/components/layout/admin-layout/AdminLayout";
import { IProject } from "@/models/project.model";
import { getProjects } from "@/services/project.service";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const ProjectList = dynamic(
  () => import("@/components/admin/projects/project-list/ProjectList"),
  {
    ssr: false,
  }
);

interface IProjectProps {
  projects: IProject[];
}

const Project = ({ projects }: IProjectProps) => {
  const [projectList, setProjectList] = useState<IProject[]>(projects);

  return (
    <AdminLayout>
      <ProjectList projects={projectList} setProjects={setProjectList} />
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getProjects("");
    console.log(response);
    return {
      props: {
        projects: response,
      },
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      props: {
        projects: [],
      },
    };
  }
};

export default Project;
