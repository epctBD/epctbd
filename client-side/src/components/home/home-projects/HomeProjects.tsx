import CoreTitles from "@/components/common/core-titles/CoreTitles";
import styles from "./HomeProjects.module.scss";
import ProjectCard from "@/components/common/project-card/ProjectCard";
import { ProjectData } from "./ProjectData";
import { Row, Col } from "antd";

const HomeProjects = () => {
  // const heights = [
  //   480,
  //   560,
  //   435, // Row 1
  //   512,
  //   480,
  //   480, // Row 2
  //   435,
  //   480,
  //   435, // Row 3
  // ];

  return (
    <div className={styles.projectsWrapper}>
      <CoreTitles
        subTitle="Our Projects"
        title="Explore Our Work"
        intro="A showcase of innovative solutions and impactful projects delivered by our team."
      />

      <Row gutter={[16, 16]} justify="center">
        {ProjectData.map((project, index) => (
          <Col key={project.id} xs={24} sm={24} md={12} lg={8} xl={8}>
            <ProjectCard
              id={project.id}
              title={project.title}
              location={project.location}
              imageSrc={project.imageSrc}
              type={project.type}
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
