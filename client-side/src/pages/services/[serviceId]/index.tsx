import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import { Breadcrumb, Col, Row } from "antd";
import Image from "next/image";
import img1 from "../../../../public/Carousel/1.png";
import img2 from "../../../../public/Carousel/2.png";
import img3 from "../../../../public/Carousel/3.png";
import img4 from "../../../../public/Carousel/4.jpeg";
import styles from "./ServiceDetails.module.scss";

const services = [
  {
    title: "3D Modelling & Animation",
    description:
      "We create detailed, realistic 3D models and animations to bring your architectural designs to life. Our services help clients visualize projects accurately before construction, enhancing decision-making and design clarity.",
    image: img1,
  },
  {
    title: "Architectural Plan, Elevation & Section",
    description:
      "We provide comprehensive architectural planning, including floor plans, building elevations, and sectional views. This service ensures accurate visualization of the entire project, helping you understand both the internal layout and external structure, making it easier to finalize designs and guide the construction process.",
    image: img2,
  },
  {
    title: "Interior Design Visualization",
    description:
      "Our interior design visualization services help you see your spaces before they are built, offering insights into material choices, lighting, and overall aesthetics to ensure satisfaction.",
    image: img3,
  },
  {
    title: "Virtual Reality Walkthroughs",
    description:
      "Experience your designs in immersive virtual reality, allowing you to explore and interact with your architectural spaces before they are built.",
    image: img4,
  },
];

const ServiceDetails = () => {
  return (
    <div className={styles.serviceDetailWrapper}>
      <div className={styles.serviceDetailHeader}>
        <div className={styles.detailHeaderText}>
          <Breadcrumb
            separator={<span style={{ color: "#A3A6AA" }}>/</span>}
            items={[
              {
                title: (
                  <a href="/services" style={{ color: "#0077EE" }}>
                    Services
                  </a>
                ),
              },
              {
                title: <span style={{ color: "#A3A6AA" }}>serviceId</span>,
              },
            ]}
          />
          <div className={styles.detailTitleWrapper}>
            <p className={styles.detailTitle}>Architectural Design</p>
            <p className={styles.detailSubtitle}>
              Crafting visionary designs with precision, sustainability, and
              functionality to elevate every project we undertake.
            </p>
          </div>
          <div className={styles.detailHeaderButtonWrapper}>
            <CoreButton text="Contact Us" type="secondary" />
          </div>
        </div>
        <div className={styles.detailHeaderImageWrapper}>
          <div className={styles.detailHeaderRow1}>
            <Image
              src={img1}
              alt="img1"
              className={styles.serviceHeaderImage}
            />
            <Image
              src={img2}
              alt="img1"
              className={styles.serviceHeaderImage}
            />
          </div>
          <div className={styles.detailHeaderRow2}>
            <Image
              src={img3}
              alt="img1"
              className={styles.serviceHeaderImage}
            />
            <Image
              src={img4}
              alt="img1"
              className={styles.serviceHeaderImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.serviceDetailOuterWrapper}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceDetailInnerWrapper}>
            <Row gutter={[80, 40]} justify="center" align="middle">
              {index % 2 === 0 ? (
                <>
                  <Col span={12}>
                    <div className={styles.serviceDetailImageWrapper}>
                      <Image
                        src={service.image}
                        alt={`Service ${index}`}
                        className={styles.serviceDetailImage}
                      />
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className={styles.serviceDetailTextWrapper}>
                      <div className={styles.serviceDetailTextInnerWrapper}>
                        <p className={styles.serviceDetailTitle}>
                          {service.title}
                        </p>
                        <p className={styles.serviceDetailsubTitle}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col span={12}>
                    <div className={styles.serviceDetailTextWrapper}>
                      <div className={styles.serviceDetailTextInnerWrapper}>
                        <p className={styles.serviceDetailTitle}>
                          {service.title}
                        </p>
                        <p className={styles.serviceDetailsubTitle}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div className={styles.serviceDetailImageWrapper}>
                      <Image
                        src={service.image}
                        alt={`Service ${index}`}
                        className={styles.serviceDetailImage}
                      />
                    </div>
                  </Col>
                </>
              )}
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;
