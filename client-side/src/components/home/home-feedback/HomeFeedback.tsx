import React from "react";
import CoreTitles from "@/components/common/core-titles/CoreTitles";
import FeedbackCard from "@/components/common/feedback-card/FeedbackCard";
import Slider from "react-slick";
import { feedbackData } from "./FeedbackData";
import styles from "./HomeFeedback.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeFeedback = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: 0,
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <div className={styles.feedbackWrapper}>
      <CoreTitles
        subTitle="Client Feedback"
        title="Hear from Our Clients"
        intro="Genuine experiences shared by our clients about working with our team."
      />
      <Slider {...settings} className={styles.feedbackCardContainer}>
        {feedbackData.map((feedback, index) => (
          <FeedbackCard
            key={index}
            profileImage={feedback.profileImage}
            name={feedback.name}
            designation={feedback.designation}
            feedback={feedback.feedback}
          />
        ))}
      </Slider>
    </div>
  );
};

export default HomeFeedback;
