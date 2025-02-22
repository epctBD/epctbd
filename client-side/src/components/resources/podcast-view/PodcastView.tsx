import { Row, Col } from "antd";
import styles from "./podcastView.module.scss";
import PodcastCard from "@/components/common/podcast-card/PodcastCard";
import { IPodcast } from "@/models/podcast.model";
import { motion } from "framer-motion";

interface IPodcastProps {
  podcasts: IPodcast[];
}

const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut", delay: index * 0.1 },
  }),
};

const PodcastView = ({ podcasts }: IPodcastProps) => {
  return (
    <Row gutter={[24, 24]}>
      {podcasts.map((podcast, index) => (
        <Col xs={24} sm={12} md={12} xl={8} key={podcast._id}>
          <motion.div
            className={styles.podcastCardWrapper}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={index}
          >
            <PodcastCard
              id={podcast._id}
              podcast_name={podcast.podcast_name}
              podcast_url={podcast.podcast_url}
            />
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default PodcastView;
