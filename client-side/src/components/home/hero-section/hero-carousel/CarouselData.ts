import { StaticImageData } from "next/image";
import img1 from "../../../../../public/Carousel/1.png";
import img2 from "../../../../../public/Carousel/2.png";
import img3 from "../../../../../public/Carousel/3.png";
import img4 from "../../../../../public/Carousel/4.webp";
import img5 from "../../../../../public/Carousel/5.webp";

interface CarouselItem {
  id: number;
  imageId: StaticImageData;
  title: string;
  projectType: string;
  projectIntro: string;
}

export const carouselData: CarouselItem[] = [
  {
    id: 1,
    imageId: img1,
    title: "Baytus Salam Jame Mosque, Beanibazar",
    projectType: "Religius Center",
    projectIntro:
      "This 9-story center integrates labs, consultation rooms, and offices, providing a streamlined space for high-quality healthcare services.",
  },
  {
    id: 2,
    imageId: img2,
    title: "Lion's Hospital, Kumarpara, Sylhet",
    projectType: "Healthcare Industry",
    projectIntro:
      "This 9-story center integrates labs, consultation rooms, and offices, providing a streamlined space for high-quality healthcare services.",
  },
  {
    id: 3,
    imageId: img3,
    title: "Popular Diagonstic Centre, Sylhet",
    projectType: "Healthcare industry",
    projectIntro:
      "This 9-story center integrates labs, consultation rooms, and offices, providing a streamlined space for high-quality healthcare services.",
  },
  {
    id: 4,
    imageId: img4,
    title: "Futuristic AI Imagine Building, Sylhet",
    projectType: "Healthcare industry",
    projectIntro:
      "This 9-story center integrates labs, consultation rooms, and offices, providing a streamlined space for high-quality healthcare services.",
  },

  {
    id: 5,
    imageId: img5,
    title: "DALL-E AI Estate Tower, Sylhet",
    projectType: "Healthcare industry",
    projectIntro:
      "This 9-story center integrates labs, consultation rooms, and offices, providing a streamlined space for high-quality healthcare services.",
  },
];
