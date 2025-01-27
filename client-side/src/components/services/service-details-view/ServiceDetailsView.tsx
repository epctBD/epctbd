import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import { Breadcrumb, Col, Grid, Row } from "antd";
import Image from "next/image";
import styles from "./ServiceDetailsView.module.scss";
import Link from "next/link";
import { IService } from "@/models/services.model";

const { useBreakpoint } = Grid;

interface ServiceDetailsViewProps {
  service: IService;
}

const ServiceDetailsView = ({ service }: ServiceDetailsViewProps) => {
  const screens = useBreakpoint();

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
          <div className={styles.detailHeaderRow}>
            <div className={styles.serviceHeaderImageWrapper}>
              <Image
                src="https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888970/services_image/Urban_Planning.jpg"
                alt="img1"
                className={styles.serviceHeaderImage}
                width={220}
                height={136}
              />
            </div>
            <div className={styles.serviceHeaderImageWrapper}>
              <Image
                src="https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888970/services_image/Urban_Planning.jpg"
                alt="img1"
                className={styles.serviceHeaderImage}
                width={220}
                height={136}
              />
            </div>
          </div>
          <div className={`${styles.detailHeaderRow} ${styles.padding}`}>
            <div className={styles.serviceHeaderImageWrapper}>
              <Image
                src="https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888970/services_image/Urban_Planning.jpg"
                alt="img1"
                className={styles.serviceHeaderImage}
                width={220}
                height={136}
              />
            </div>
            <div className={styles.serviceHeaderImageWrapper}>
              <Image
                src="https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888970/services_image/Urban_Planning.jpg"
                alt="img1"
                className={styles.serviceHeaderImage}
                width={220}
                height={136}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.serviceDetailOuterWrapper}>
        {service.service_type.map((type, index) => (
          <div key={index} className={styles.serviceDetailInnerWrapper}>
            <Row
              gutter={[24, 24]}
              justify="center"
              align="middle"
              style={{ margin: "40px 0" }}
            >
              <Col
                xs={24}
                lg={12}
                order={screens.lg ? (index % 2 === 0 ? 1 : 2) : 1}
              >
                <div className={styles.serviceDetailImageWrapper}>
                  <Image
                    src={type.photo}
                    alt={`Service ${index}`}
                    className={styles.serviceDetailImage}
                    width={562}
                    height={356}
                  />
                </div>
              </Col>
              <Col
                xs={24}
                lg={12}
                order={screens.lg ? (index % 2 === 0 ? 2 : 1) : 2}
              >
                <div className={styles.serviceDetailTextWrapper}>
                  <div className={styles.serviceDetailTextInnerWrapper}>
                    <p className={styles.serviceDetailTitle}>{type.name}</p>
                    <p className={styles.serviceDetailsubTitle}>{type.brief}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetailsView;
