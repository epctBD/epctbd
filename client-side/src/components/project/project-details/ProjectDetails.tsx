import { Breadcrumb, Col, Row, Tabs, TabsProps } from "antd";
import styles from "./projectDetails.module.scss";
import AreaIcon from "@/components/common/svg/AreaIcon";
import Lighting from "@/components/common/svg/Lighting";
import MapIcons from "@/components/common/svg/MapIcons";
// import ProjectDetailsCarousel from "@/components/common/project/projectDetails/ProjectDetailsCarousel";
import { IProject } from "@/models/project.model";
import { GetServerSideProps } from "next";

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
      label: "Overview",
      children: <p style={{ color: "white" }}>{project.projectOverview}</p>,
    },
    {
      key: "2",
      label: "Key feature",
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
      <Row gutter={32}>
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
                  title: (
                    <span style={{ color: "#A3A6AA" }}>{project.category}</span>
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
                    <span className={styles.areaSpan}>
                      Lighting Designers:{" "}
                    </span>
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
        {/* <Col span={12}>
          <div className={styles.carouselSection}>
            <ProjectDetailsCarousel
              data={project.projectImages.map((image, index) => ({
                id: index,
                imageId: image.imageId,
              }))}
            />
          </div>
        </Col> */}
      </Row>

      <Row>
        <Col span={14}>
          <div className={styles.projectTabWrapper}>
            <div className={styles.projectTabInnerWrapper}>
              <Tabs
                defaultActiveKey="1"
                items={items}
                // className={styles.customTabContent}
                centered={true}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  // Retrieve the slug from the URL
  // const { slug } = context.params!;

  // Here, you can fetch data from an API or database.
  // For now, we'll use the dummy data defined above.
  const project: IProject = {
    _id: "1",
    slug: "modern-home-design",
    name: "Modern Home Design",
    details:
      "A beautiful modern home design focusing on minimalist aesthetics and functionality.",
    serviceType: "Architecture",
    category: "Residential",
    area: "2500 sqft",
    projectYear: "2023",
    designer: "John Doe",
    location: "San Francisco, CA",
    projectOverview:
      "The project encompasses modern design principles with sustainable building materials.",
    keyFeatures:
      "Open floor plan, Smart home integration, Sustainable materials",
    outcome:
      "A stunning, eco-friendly residence with a blend of aesthetics and comfort.",
    projectImages: [
      "/images/project1-1.jpg",
      "/images/project1-2.jpg",
      "/images/project1-3.jpg",
    ],
  };

  return {
    props: {
      project,
    },
  };
};

export default ProjectDetailsComponent;
