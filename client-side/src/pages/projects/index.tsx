import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import PortfolioCard from "@/components/common/portfolio-card/PortfolioCard";
import { GetServerSideProps } from "next";
import image from "@/components/common/core-components/core-banner/banner.jpeg";
import TeamCard from "@/components/common/team-card/TeamCard";
import teamimage from "@/components/common/team-card/profile-image.jpg";

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

      <div
        style={{
          padding: "40px 80px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <PortfolioCard
          imageSrc={image}
          title=" Innovative Urban Development at City Square"
          subTitle="  A blend of modern architecture and sustainability, this project
            redefines city living with energy-efficient solutions and stylish
            spaces."
          position="left"
        />

        <PortfolioCard
          imageSrc={image}
          title=" Innovative Urban Development at City Square"
          subTitle="  A blend of modern architecture and sustainability, this project
            redefines city living with energy-efficient solutions and stylish
            spaces."
          position="right"
        />

        <TeamCard
          imageSrc={teamimage}
          name="Mujammal Ahmed"
          position="Software Engineer"
          facebook="https://www.facebook.com/"
          twitter="https://x.com/"
          linkedin="https://linkedin.com/"
        />
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
