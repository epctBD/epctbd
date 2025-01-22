import { Breadcrumb, Col, Row, Tabs, TabsProps } from "antd";
import styles from "./projectDetails.module.scss";
import AreaIcon from "@/components/common/svg/AreaIcon";
import Lighting from "@/components/common/svg/Lighting";
import MapIcons from "@/components/common/svg/MapIcons";
import ProjectDetailsCarousel from "@/components/common/project/projectDetails/ProjectDetailsCarousel";
import { IProject } from "@/models/project.model";
import Link from "next/link";

export interface IProjectDetailsProps {
  project: IProject;
}

const ProjectDetailsComponent = ({ project }: IProjectDetailsProps) => {
  if (!project) {
    return <div>No project data available.</div>;
  }

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Project Overview",
      children: <p style={{ color: "white" }}>{project.projectOverview}</p>,
    },
    {
      key: "2",
      label: "Key Features",
      children: <p style={{ color: "white" }}>{project.keyFeatures}</p>,
    },
    {
      key: "3",
      label: "Outcome",
      children: <p style={{ color: "white" }}>{project.outcome}</p>,
    },
  ];

  return (
    <div className={styles.projectDetailsWrapper}>
      <Row gutter={[15, 15]}>
        <Col lg={12} md={24}>
          <div className={styles.projectDetailsHeader}>
            <Breadcrumb
              separator={<span style={{ color: "#A3A6AA" }}>/</span>}
              items={[
                {
                  title: (
                    <Link href="/projects" style={{ color: "#0077EE" }}>
                      Projects
                    </Link>
                  ),
                },
                {
                  title: (
                    <span style={{ color: "#A3A6AA" }}>
                      {project.serviceType}
                    </span>
                  ),
                },
              ]}
            />
            <div className={styles.ProjectDetailsTitle}>{project.name}</div>
            <div className={styles.ProjectDetailsDescription}>
              {project.details}
            </div>
            <div className={styles.ProjectDetailsInnerWrapper}>
              {project.area && (
                <div className={styles.areaWrapper}>
                  <div className={styles.projectIcon}>
                    <AreaIcon />
                  </div>
                  <p>
                    <span className={styles.areaSpan}>Area: </span>{" "}
                    {project.area}
                  </p>
                </div>
              )}
              {project.projectYear && (
                <div className={styles.areaWrapper}>
                  <div className={styles.projectIcon}>
                    <AreaIcon />
                  </div>
                  <p>
                    <span className={styles.areaSpan}>Year: </span>{" "}
                    {project.projectYear}
                  </p>
                </div>
              )}
              {project.designer && (
                <div className={styles.areaWrapper}>
                  <div className={styles.projectIcon}>
                    <Lighting />
                  </div>
                  <p>
                    <span className={styles.areaSpan}>Designers: </span>
                    {project.designer}
                  </p>
                </div>
              )}
              {project.location && (
                <div className={styles.areaWrapper}>
                  <div className={styles.projectIcon}>
                    <MapIcons />
                  </div>
                  <p>
                    <span className={styles.areaSpan}>Location: </span>
                    {project.location}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Col>

        <Col lg={12} md={24} sm={24}>
          <div className={styles.carouselSection}>
            <ProjectDetailsCarousel data={project.projectImages || []} />
          </div>
        </Col>
        <Col lg={14} md={24} sm={24}>
          <div className={styles.projectTabWrapper}>
            <div className={styles.projectTabInnerWrapper}>
              <Tabs defaultActiveKey="1" items={items} centered={true} />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectDetailsComponent;
