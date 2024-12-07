import { Breadcrumb, Col, Row } from "antd";
import styles from "./ProjectDetails.module.scss";
import AreaIcon from "@/components/common/svg/AreaIcon";
import Lighting from "@/components/common/svg/Lighting";
import MapIcons from "@/components/common/svg/MapIcons";

export interface IProjectData {
  title: string;
  description: string;
  area?: string;
  lightingDesigners?: string;
  location?: string;
}

const dummyProjectData: IProjectData = {
  title: "Green Valley Residential Complex",
  description:
    "Green Valley is a modern residential complex featuring eco-friendly designs, open spaces, and state-of-the-art facilities. This project aims to provide a luxurious and sustainable living experience for residents.",
  area: "1,200 sqft",
  lightingDesigners: "Bright Illumination Co.",
  location: "Dhaka, Bangladesh",
};

const ProjectDetails = () => {
  const projectData = dummyProjectData;

  if (!projectData) {
    return <div>No project data available.</div>;
  }

  const { title, description, area, lightingDesigners, location } = projectData;

  return (
    <div className={styles.projectDetailsWrapper}>
      <Row>
        <Col span={12}>
          <div className={styles.projectDetailsHeader}>
            <Breadcrumb
              separator={<span style={{ color: "#A3A6AA" }}>/</span>}
              items={[
                {
                  title: (
                    <a href="/services" style={{ color: "#0077EE" }}>
                      Projects
                    </a>
                  ),
                },
                {
                  title: <span style={{ color: "#A3A6AA" }}>{title}</span>,
                },
              ]}
            />
            <div className={styles.ProjectDetailsTitle}>{title}</div>
            <div className={styles.ProjectDetailsDescription}>
              {description}
            </div>
            <div className={styles.ProjectDetailsInnerWrapper}>
              {area && (
                <div className={styles.areaWrapper}>
                  <div className={styles.projectIcon}>
                    <AreaIcon />
                  </div>
                  <p>
                    <span className={styles.areaSpan}>Area: </span> {area}
                  </p>
                </div>
              )}
              {lightingDesigners && (
                <div className={styles.areaWrapper}>
                  <div className={styles.projectIcon}>
                    <Lighting />
                  </div>
                  <p>
                    <span className={styles.areaSpan}>
                      Lighting Designers:{" "}
                    </span>
                    {lightingDesigners}
                  </p>
                </div>
              )}
              {location && (
                <div className={styles.areaWrapper}>
                  <div className={styles.projectIcon}>
                    <MapIcons />
                  </div>
                  <p>
                    <span className={styles.areaSpan}>Location: </span>
                    {location}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Col>
        <Col span={12}>project detail image</Col>
      </Row>
    </div>
  );
};

export default ProjectDetails;
