import { Row, Col } from "antd";
import styles from "./podcastView.module.scss";
import PodcastCard from "@/components/common/podcast-card/PodcastCard";

interface IPodcast {
  id: string;
  podcast_name: string;
  podcast_url: string;
}

const dummyPodcasts: IPodcast[] = [
  {
    id: "1",
    podcast_name: "Getting Started with Web Development",
    podcast_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "2",
    podcast_name: "The Future of AI in Technology",
    podcast_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: "3",
    podcast_name: "Career Growth in Tech",
    podcast_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const PodcastView = () => {
  return (
    <Row gutter={[24, 24]}>
      {dummyPodcasts.map((podcast) => (
        <Col xs={24} sm={12} md={12} xl={8} key={podcast.id}>
          <div className={styles.podcastCardWrapper}>
            <PodcastCard
              id={podcast.id}
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
