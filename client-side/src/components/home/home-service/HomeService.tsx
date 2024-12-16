import ServiceCard from "@/components/common/service-card/ServiceCard";
import { services } from "@/components/services/constant";
import { Col, Row } from "antd";
import styles from "./HomeService.module.scss";

const HomeService = () => {
  return (
    <div className={styles.homeServiceWrapper}>
      <div className={styles.textWrapper}>
        <p className={styles.title}>Complete Project Solutions</p>
        <p className={styles.subtitle}>
          Explore Our Range of Services Find the right services for every
          project need.
        </p>
      </div>
      <Row gutter={[24, 24]} justify="center" align="middle">
        {services.map((service) => (
          <Col xs={24} sm={12} md={8} lg={6} key={service.serviceSlug}>
            <ServiceCard
              image={service.image}
              title={service.title}
              subtitle={service.description}
              slug={service.serviceSlug}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeService;
