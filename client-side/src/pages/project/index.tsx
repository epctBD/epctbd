import CoreBanner from "@/components/common/core-components/core-banner/CoreBanner";
import { IProject } from "@/models/project.model";
import { getProjects } from "@/services/project.service";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const ProjectView = dynamic(
  () => import("@/components/common/project/ProjectView"),
  {
    ssr: false,
  }
);

interface IProjectProps {
  projects: IProject[];
}

const Project = ({ projects }: IProjectProps) => {
  const [projectList, setProjectList] = useState<IProject[]>(projects);

  console.log(projectList);

  return (
    <div>
      <CoreBanner
        title="Our Works"
        subtitle="WOrks"
        crumbOne="Home"
        crumbTwo="Project"
      />
      <div className={"container-wrapper"}>
        <ProjectView
          projectList={projectList}
          setProjectList={setProjectList}
        />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getProjects("OngoingProjects");
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
