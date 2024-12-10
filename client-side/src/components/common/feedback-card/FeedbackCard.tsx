import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./FeedbackCard.module.scss";
import qouteImg from "../../../../public/images/quote.png";

export interface FeedbackCardProps {
  profileImage: StaticImageData;
  name: string;
  designation: string;
  feedback: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  profileImage,
  name,
  designation,
  feedback,
}) => {
  return (
    <div className={styles.feedbackCardWrapper}>
      <div className={styles.feedbackImageWrapper}>
        <Image
          src={profileImage}
          alt={`${name}-profile`}
          className={styles.feedbackImage}
        />
        <div>
          <p className={styles.feedbackCardName}>{name}</p>
          <p className={styles.feedbackCardDesignation}>{designation}</p>
        </div>
      </div>
      <div className={styles.feedbackTextWrapper}>
        <Image src={qouteImg} alt="quote" className={styles.qouteImg} />
        <p className={styles.feedbackText}>{feedback}&quot;</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
