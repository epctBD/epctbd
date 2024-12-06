import { Col, Row } from "antd";
import styles from "./ServicesView.module.scss";
import { services } from "../constant";
import ServiceCard from "@/components/common/service-card/ServiceCard";

const ServicesView = () => {
  return (
    <div className={styles.servicesViewWrapper}>
      <p className={styles.serviceTitle}>Specialization Is Our Strength</p>
      <div>
        <Row gutter={[24, 24]} justify="center">
          {services.map((service) => (
            <Col span={6} key={service.slug}>
              <ServiceCard
                image={service.image}
                title={service.title}
                subtitle={service.description}
                slug={service.slug}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ServicesView;
