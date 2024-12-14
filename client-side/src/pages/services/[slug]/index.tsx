import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import { Breadcrumb, Col, Row } from "antd";
import Image from "next/image";
import img1 from "../../../../public/Carousel/1.png";
import img2 from "../../../../public/Carousel/2.png";
import img3 from "../../../../public/Carousel/3.png";
import img4 from "../../../../public/Carousel/4.jpeg";
import styles from "./ServiceDetails.module.scss";
import { services } from "@/components/services/constant";
import { useRouter } from "next/router";
import Link from "next/link";

const ServiceDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the service based on the slug
  const service = services.find((s) => s.slug === slug);

  // Render fallback for invalid slugs
  if (!service) {
    return <p>Service not found!</p>;
  }

  return (
    <div className={styles.serviceDetailWrapper}>
      <div className={styles.serviceDetailHeader}>
        <div className={styles.detailHeaderText}>
          <Breadcrumb
            separator={<span style={{ color: "#A3A6AA" }}>/</span>}
            items={[
              {
                title: (
                  <Link href="/services" style={{ color: "#0077EE" }}>
                    Services
                  </Link>
                ),
              },
              {
                title: (
                  <span style={{ color: "#A3A6AA" }}>{service.title}</span>
                ),
              },
            ]}
          />
          <div className={styles.detailTitleWrapper}>
            <p className={styles.detailTitle}>{service.title}</p>
            <p className={styles.detailSubtitle}>{service.description}</p>
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
