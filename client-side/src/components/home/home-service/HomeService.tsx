import ServiceCard from "@/components/common/service-card/ServiceCard";
import { services } from "@/components/services/constant";
import { Col, Row } from "antd";
import styles from "./HomeService.module.scss";
import CoreTitles from "@/components/common/core-titles/CoreTitles";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: index * 0.2 },
  }),
};

const HomeService = () => {
  return (
    <div className={styles.homeServiceWrapper}>
      <CoreTitles
        title="Explore Where We Specialize"
        subTitle="Our Services"
        intro="A trusted hub for a wide range of solutions ready to meet your needs"
      />
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
  );
};

export default HomeService;
