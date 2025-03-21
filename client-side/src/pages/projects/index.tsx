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

const Projects = ({ projects }: IProjectProps) => {
  const [projectList, setProjectList] = useState<IProject[]>(projects);

  return (
    <div>
      <CoreBanner
        title="Our Projects"
        subtitle="Showcasing Our Dedication and Innovation"
        crumbOne="Home"
        crumbTwo="Projects"
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
    const response = await getProjects("Ongoing Projects");
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

export default Projects;
