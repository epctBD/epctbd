import ServiceCard from "@/components/common/service-card/ServiceCard";
import { services } from "@/components/services/constant";
import { Col, Row } from "antd";
import styles from "./HomeService.module.scss";
import CoreTitles from "@/components/common/core-titles/CoreTitles";

const HomeService = () => {
  return (
    <div className={styles.homeServiceWrapper}>
      <CoreTitles
        title="Explore Where We Specialize"
        subTitle="Our Services"
        intro="A trusted hub for a wide range of solutions ready to meet your needs"
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
