import styles from "./PodcastCard.module.scss";

export interface IPodcastCardProps {
  id: string;
  podcast_name: string;
  podcast_url: string;
}

const PodcastCard = ({ podcast_name, podcast_url }: IPodcastCardProps) => {
  const getEmbedUrl = (url: string) => {
    try {
      // Handle different YouTube URL formats
      const urlObj = new URL(url);
      let videoId = "";

      if (urlObj.hostname.includes("youtube.com")) {
        // Regular youtube.com URLs
        videoId = urlObj.searchParams.get("v") || "";
      } else if (urlObj.hostname.includes("youtu.be")) {
        // Shortened youtu.be URLs
        videoId = urlObj.pathname.slice(1);
      }

      if (!videoId) {
        console.error("Could not extract YouTube video ID from URL:", url);
        return "";
      }

      return `https://www.youtube.com/embed/${videoId}`;
    } catch (error) {
      console.error("Invalid URL:", url);
      return "";
    }
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
