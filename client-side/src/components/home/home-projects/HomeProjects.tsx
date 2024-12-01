import CoreTitles from "@/components/common/core-titles/CoreTitles";
import ProjectCard from "@/components/common/project-card/ProjectCard";
import styles from "./HomeProjects.module.scss";

import { Col, Row } from "antd";
import { ProjectCardItem, ProjectData } from "./ProjectData";

const HomeProjects = () => {
  return (
    <div className={styles.projectsWrapper}>
      <CoreTitles
        subTitle="Client Feedback"
        title="Hear from Our Clients"
        intro="Genuine experiences shared by our clients about working with our team."
      />

      <Row gutter={[10, 10]}>
        {ProjectData.map((project: ProjectCardItem) => (
          <Col span={8} key={project.id}>
            <ProjectCard
              id={project.id}
              title={project.title}
              location={project.location}
              imageSrc={project.imageSrc}
              type={project.type}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeProjects;
