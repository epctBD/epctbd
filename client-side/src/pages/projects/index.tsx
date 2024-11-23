import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import { GetServerSideProps } from "next";
import React from "react";

interface Project {
  id: string;
  title: string;
  description: string;
}

interface FeaturedProjectsProps {
  featuredProjects: Project[];
}

const Projects = ({ featuredProjects }: FeaturedProjectsProps) => {
  return (
    <div style={{ padding: "20px" }}>
      {featuredProjects?.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
      <div style={{ display: "flex", gap: "20px", marginTop: "50px" }}>
        <CoreButton text="Click me" type="primary" size="large" />
        <CoreButton text="Click me" type="secondary" size="large" />
        <CoreButton text="Click me" type="primaryHover" size="large" />
        <CoreButton text="Click me" type="basic" size="large" />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const featuredProjects = [
    { id: "1", title: "Project 1", description: "Description of project 1" },
    { id: "2", title: "Project 2", description: "Description of project 2" },
  ];

  return {
    props: {
      featuredProjects,
    },
  };
};

export default Projects;
