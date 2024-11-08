import { Button } from "antd";
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

      <Button type="primary">Click Me</Button>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const featuredProjects = [
    { id: "1", title: "Project 1", description: "Description of project 1" },
    { id: "2", title: "Project 2", description: "Description of project 2" },
    // More projects...
  ];

  return {
    props: {
      featuredProjects,
    },
  };
};

export default Projects;
