import { Breadcrumb, Col, Row } from "antd";
import styles from "./ProjectDetails.module.scss";
import AreaIcon from "@/components/common/svg/AreaIcon";
import Lighting from "@/components/common/svg/Lighting";
import MapIcons from "@/components/common/svg/MapIcons";
import img1 from "../../../../public/Carousel/1.png";
import img2 from "../../../../public/Carousel/2.png";
import img3 from "../../../../public/Carousel/3.png";
import img4 from "../../../../public/Carousel/demo.png";
import ProjectDetailsCarousel from "@/components/projects/project-details/projectDetails/ProjectDetailsCarousel";
import { StaticImageData } from "next/image";

export interface IProjectData {
  title: string;
  description: string;
  area?: string;
  lightingDesigners?: string;
  location?: string;
  images: Array<{ id: number; imageId: StaticImageData }>;
}

const dummyProjectData: IProjectData = {
  title: "Green Valley Residential Complex",
  description:
    "Green Valley is a modern residential complex featuring eco-friendly designs, open spaces, and state-of-the-art facilities. This project aims to provide a luxurious and sustainable living experience for residents.",
  area: "1,200 sqft",
  lightingDesigners: "Bright Illumination Co.",
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

  const { title, description, area, lightingDesigners, location, images } =
    projectData;

  return (
    <div className={styles.projectDetailsWrapper}>
      <Row gutter={32}>
        {/* Project Details Section */}
        <Col span={12}>
          <div className={styles.projectDetailsHeader}>
            {/* Breadcrumb */}
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
            {/* Title */}
            <div className={styles.ProjectDetailsTitle}>{title}</div>
            {/* Description */}
            <div className={styles.ProjectDetailsDescription}>
              {description}
            </div>
            {/* Additional Info */}
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
    </div>
  );
};

export default ProjectDetails;
