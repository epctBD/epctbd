import CoreTitles from "@/components/common/core-titles/CoreTitles";
import styles from "./HomeProjects.module.scss";
import ProjectCard from "@/components/common/project-card/ProjectCard";
import { Row, Col, Button } from "antd";
import { IProject } from "@/models/project.model";
import { useRouter } from "next/router";

interface HomeProjectsProps {
  projects: IProject[];
}

const HomeProjects = ({ projects }: HomeProjectsProps) => {
  const router = useRouter();
  const goToAboutUs = () => {
    router.push("about-us");
  };

  return (
    <div className={styles.projectsWrapper}>
      <CoreTitles
        subTitle="Our Projects"
        title="In the Spotlight: Our Featured Projects"
        intro="Explore the key projects that represent the best of what we do"
      />

      <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <div className={styles.ButtonSeeMoreWrapper}>
            <Button
              variant="text"
              style={{
                color: "#0077EE",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "18px",
                fontWeight: "600",
              }}
              onClick={goToAboutUs}
            >
              Explore More
            </Button>
          </div>
        </Col>
        {projects.slice(0, 6).map((project, index) => (
          <Col key={project.projectSlug} xs={24} sm={24} md={12} lg={8} xl={8}>
            <ProjectCard
              id={project._id}
              title={project.name}
              location={project.location || ""}
              imageSrc={project.projectImages?.[0] || ""}
              type={project.serviceType}
              // imageHeight={heights[index % heights.length]}
              slug={project.projectSlug || ""}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeProjects;
