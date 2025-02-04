import { Row, Col } from "antd";
import styles from "./podcastView.module.scss";
import PodcastCard from "@/components/common/podcast-card/PodcastCard";
import { IPodcast } from "@/models/podcast.model";

interface IPodcastProps {
  podcasts: IPodcast[];
}

const PodcastView = ({ podcasts }: IPodcastProps) => {
  return (
    <Row gutter={[24, 24]}>
      {podcasts.map((podcast) => (
        <Col xs={24} sm={12} md={12} xl={8} key={podcast._id}>
          <div className={styles.podcastCardWrapper}>
            <PodcastCard
              id={podcast._id}
              podcast_name={podcast.podcast_name}
              podcast_url={podcast.podcast_url}
            />
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default PodcastView;
