import styles from "./podcastView.module.scss";

const PodcastView = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Coming Soon</h1>
      <p className={styles.subText}>Stay tuned for exciting content!</p>
    </div>
  );
};

export default PodcastView;
