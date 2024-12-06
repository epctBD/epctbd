import CoreTitles from "@/components/common/core-titles/CoreTitles";
import styles from "./HomeProjects.module.scss";
import ProjectCard from "@/components/common/project-card/ProjectCard";
import { ProjectData } from "./ProjectData";
import { Row, Col } from "antd";

const HomeProjects = () => {
  const heights = [
    480,
    560,
    435, // Row 1
    512,
    480,
    480, // Row 2
    435,
    480,
    435, // Row 3
  ];

  return (
    <div className={styles.projectsWrapper}>
      <CoreTitles
        subTitle="Client Feedback"
        title="Hear from Our Clients"
        intro="Genuine experiences shared by our clients about working with our team."
      />

      <Row gutter={[16, 16]} justify="center">
        {ProjectData.map((project, index) => (
          <Col key={project.id} xs={24} sm={12} md={8} lg={8}>
            <ProjectCard
              id={project.id}
              title={project.title}
              location={project.location}
              imageSrc={project.imageSrc}
              type={project.type}
              imgHeight={heights[index % heights.length]}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeProjects;
