import React from "react";
import Image from "next/image";
import styles from "./FeedbackCard.module.scss";
import qouteImg from "@/assets/images/quote.png";

export interface FeedbackCardProps {
  profileImage: string;
  name: string;
  designation: string;
  feedback: string;
}

const FeedbackCard = ({
  profileImage,
  name,
  designation,
  feedback,
}: FeedbackCardProps) => {
  return (
    <div className={styles.feedbackCardWrapper}>
      <div className={styles.feedbackImageWrapper}>
        <Image
          src={profileImage}
          alt={`${name}-profile`}
          className={styles.feedbackImage}
          width={260}
          height={280}
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
