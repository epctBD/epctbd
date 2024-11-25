import { StaticImageData } from "next/image";
import img1 from "../../../../../public/Carousel/1.png";
import img2 from "../../../../../public/Carousel/2.png";
import img3 from "../../../../../public/Carousel/3.png";
import img4 from "../../../../../public/Carousel/4.jpeg";
import img5 from "../../../../../public/Carousel/5.webp";
import img6 from "../../../../../public/Carousel/6.jpeg";

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
    projectType: "Religious Center",
    projectIntro:
      "An architectural marvel combining traditional Islamic design with modern construction techniques, creating a spiritual sanctuary.",
  },
  {
    id: 2,
    imageId: img2,
    title: "Lion's Hospital, Kumarpara, Sylhet",
    projectType: "Healthcare Facility",
    projectIntro:
      "A state-of-the-art hospital offering advanced medical services, ensuring comprehensive patient care for the local community.",
  },
  {
    id: 6,
    imageId: img6,
    title: "Gemini 2040 Tower, Sylhet",
    projectType: "Feature Architect",
    projectIntro:
      "A premier commercial complex blending futuristic design with sustainable practices, offering world-class business spaces.",
  },
  {
    id: 3,
    imageId: img3,
    title: "Popular Diagnostic Centre, Sylhet",
    projectType: "Diagnostic Center",
    projectIntro:
      "Equipped with cutting-edge technology, this center provides accurate diagnostic services to support efficient medical treatments.",
  },
  {
    id: 4,
    imageId: img4,
    title: "Futuristic AI Imagine Building, Sylhet",
    projectType: "Innovation Hub",
    projectIntro:
      "A modern hub for AI research and development, fostering collaboration and innovation in emerging technologies.",
  },
  {
    id: 5,
    imageId: img5,
    title: "DALL-E AI Estate Tower, Sylhet",
    projectType: "Commercial Tower",
    projectIntro:
      "A premier commercial complex blending futuristic design with sustainable practices, offering world-class business spaces.",
  },
];
