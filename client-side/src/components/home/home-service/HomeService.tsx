import ServiceCard from "@/components/common/service-card/ServiceCard";
import { services } from "@/components/services/constant";
import { Col, Row } from "antd";
import styles from "./HomeService.module.scss";
import CoreTitles from "@/components/common/core-titles/CoreTitles";

const HomeService = () => {
  return (
    <div className={styles.homeServiceWrapper}>
      <CoreTitles
        title="Complete Project Solutions"
        subTitle="Our Services"
        intro="Explore Our Range of Services Find the right services for every
          project need."
      />
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
