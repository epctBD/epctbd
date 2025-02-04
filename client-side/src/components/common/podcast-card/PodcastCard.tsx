import styles from "./PodcastCard.module.scss";

export interface IPodcastCardProps {
  id: string;
  podcast_name: string;
  podcast_url: string;
}

const PodcastCard = ({ podcast_name, podcast_url }: IPodcastCardProps) => {
  // Convert YouTube URL to embed URL
  const getEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className={styles.podcastCardWrapper}>
      <div className={styles.podcastImageWrapper}>
        <iframe
          className={styles.podcastIframe}
          src={getEmbedUrl(podcast_url)}
          title={podcast_name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className={styles.podcastDetailsWrapper}>
        <p className={styles.podcastTitle}>{podcast_name}</p>
      </div>
    </div>
  );
};

export default PodcastCard;
