import styles from "./ProjectDetailVideoCard.module.scss";

export interface IProjectDetailVideoCardProps {
  videoUrl: string;
}

const ProjectDetailVideoCard = ({ videoUrl }: IProjectDetailVideoCardProps) => {
  const getEmbedUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      let videoId = "";

      if (urlObj.hostname.includes("youtube.com")) {
        videoId = urlObj.searchParams.get("v") || "";
      } else if (urlObj.hostname.includes("youtu.be")) {
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
    <div className={styles.videoCardWrapper}>
      {videoUrl && (
        <iframe
          className={styles.videoIframe}
          src={getEmbedUrl(videoUrl)}
          title="Project Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default ProjectDetailVideoCard;
