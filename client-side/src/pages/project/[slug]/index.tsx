import { Breadcrumb, Col, Row, Tabs } from "antd";
import styles from "./ProjectDetails.module.scss";
import AreaIcon from "@/components/common/svg/AreaIcon";
import Lighting from "@/components/common/svg/Lighting";
import MapIcons from "@/components/common/svg/MapIcons";
import img1 from "../../../../public/Carousel/1.png";
import img2 from "../../../../public/Carousel/2.png";
import img3 from "../../../../public/Carousel/3.png";
import img4 from "../../../../public/Carousel/demo.png";
import ProjectDetailsCarousel from "@/components/common/project/projectDetails/ProjectDetailsCarousel";
import { StaticImageData } from "next/image";

export interface IProjectData {
  title: string;
  description: string;
  area?: string;
  lightingDesigners?: string;
  location?: string;
  year?: string;
  images: Array<{ id: number; imageId: StaticImageData }>;
}

const items = [
  {
    key: "1",
    label: "Project Overview",
  },
  {
    key: "2",
    label: "Key Features",
  },
  {
    key: "3",
    label: "Outcome",
  },
];

const dummyProjectData: IProjectData = {
  title: "Green Valley Residential Complex",
  description:
    "Green Valley is a modern residential complex featuring eco-friendly designs, open spaces, and state-of-the-art facilities. This project aims to provide a luxurious and sustainable living experience for residents.",
  area: "1,200 sqft",
  lightingDesigners: "Bright Illumination Co.",
  year: "2003",
  location: "Dhaka, Bangladesh",
  images: [
    { id: 1, imageId: img1 },
    { id: 2, imageId: img2 },
    { id: 3, imageId: img3 },
    { id: 4, imageId: img4 },
  ],
};

const ProjectDetails = () => {
  const projectData = dummyProjectData;

  if (!projectData) {
    return <div>No project data available.</div>;
  }

  const {
    title,
    description,
    area,
    lightingDesigners,
    location,
    images,
    year,
  } = projectData;

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
              {year && (
                <div className={styles.areaWrapper}>
                  <div className={styles.projectIcon}>
                    <AreaIcon />
                  </div>
                  <p>
                    <span className={styles.areaSpan}>Year: </span> {year}
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

        {/* Image Section */}
        <Col span={12}>
          <div className={styles.carouselSection}>
            <ProjectDetailsCarousel
              data={images.map((image) => ({
                id: image.id,
                imageId: image.imageId,
              }))}
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={14}>
          <div className={styles.projectTabWrapper}>
            <div className={styles.projectTabInnerWrapper}>
              <Tabs
                defaultActiveKey="1"
                items={items}
                // onChange={onTabChange}
              />
            </div>
            <div></div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProjectDetails;
