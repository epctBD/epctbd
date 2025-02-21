import { Col, Row } from "antd";
import styles from "./ServicesView.module.scss";
import { services } from "../constant";
import ServiceCard from "@/components/common/service-card/ServiceCard";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut", delay: index * 0.1 },
  }),
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesView = () => {
  return (
    <div className={styles.servicesViewWrapper}>
      <motion.p
        className={styles.serviceTitle}
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Specialization Is Our Strength
      </motion.p>

      <div>
        <Row gutter={[24, 24]} justify="center" align="middle">
          {services.map((service, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={service.serviceSlug}>
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <ServiceCard
                  image={service.image}
                  title={service.title}
                  subtitle={service.description}
                  slug={service.serviceSlug}
                />
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ServicesView;
