import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoreTitles from "@/components/common/core-titles/CoreTitles";
import FeedbackCard from "@/components/common/feedback-card/FeedbackCard";
import Slider from "react-slick";
import { feedbackData } from "./FeedbackData";
import styles from "./HomeFeedback.module.scss";

const HomeFeedback = () => {
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: "160px",
    speed: 200,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 1,
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
