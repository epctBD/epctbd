import { Col, Row } from "antd";
import styles from "./ServicesView.module.scss";
import { services } from "../constant";
import ServiceCard from "@/components/common/service-card/ServiceCard";

const ServicesView = () => {
  return (
    <div className={styles.servicesViewWrapper}>
      <p className={styles.serviceTitle}>Specialization Is Our Strength</p>
      <div>
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
    </div>
  );
};

export default ServicesView;
