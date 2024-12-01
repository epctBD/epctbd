import { StaticImageData } from "next/image";
import profileImg from "../../../../public/images/feedback-profile.png";
import profileImg1 from "../../../../public/Carousel/1.png";

export interface Feedback {
  name: string;
  designation: string;
  profileImage: StaticImageData;

  feedback: string;
}

export const feedbackData: Feedback[] = [
  {
    name: "Jemma Cumming",
    designation: "Design Lead at LSKD",
    profileImage: profileImg1,

    feedback:
      "Tolstoy provides an authentic interaction without actually conversing. It allows us to meet shoppers where they are, show them what they'd like to see, and engage them more with our brand. Tolstoy isn't just a nice-to-have; it's a must-have.",
  },
  {
    name: "Alex Johnson",
    designation: "Marketing Manager at ABC Corp",
    profileImage: profileImg,

    feedback:
      "Working with this team has been a game-changer for our marketing strategy. The level of creativity and professionalism they bring is unparalleled.",
  },
  {
    name: "Maria Gonzalez",
    designation: "Founder at Creativa",

    profileImage: profileImg,
    feedback:
      "Their solutions are innovative, and their approach is highly collaborative. I couldn't have asked for a better partner for my business growth.",
  },
  {
    name: "Ethan Lee",
    designation: "CTO at NextTech",
    profileImage: profileImg,

    feedback:
      "The team truly understands the tech landscape and provides solutions that are both practical and futuristic. Highly recommended!",
  },
];
