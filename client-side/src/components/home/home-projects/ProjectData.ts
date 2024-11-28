import { StaticImageData } from "next/image";
// import img1 from "../../../../public/Carousel/1.png";
import img2 from "../../../../public/Carousel/2.png";
// import img3 from "../../../../public/Carousel/3.png";
// import img4 from "../../../../public/Carousel/4.jpeg";
// import img5 from "../../../../public/Carousel/5.webp";
import img6 from "../../../../public/Carousel/6.jpeg";

export interface ProjectCardItem {
  id: number;
  title: string;
  location: string;
  imageSrc: StaticImageData;
  type: string;
}

export const ProjectData: ProjectCardItem[] = [
  //   {
  //     id: 1,
  //     title: "Baytus Salam Jame Mosque, Beanibazar",
  //     location: "Beanibazar",
  //     imageSrc: img1,
  //     type: "Religious Center",
  //   },

  {
    id: 2,
    title: "Lion's Hospital, Kumarpara, Sylhet",
    location: "Sylhet",
    imageSrc: img2,
    type: "Religious Center",
  },
  {
    id: 6,
    title: "Gemini 2040 Tower, Sylhet",
    location: "Sylhet",
    imageSrc: img6,
    type: "Religious Center",
  },
  //   {
  //     id: 3,
  //     title: "Popular Diagnostic Centre, Sylhet",
  //     location: "Sylhet",
  //     imageSrc: img3,
  //       type: "Religious Center",
  //   },
  //   {
  //     id: 4,
  //     title: "Futuristic AI Imagine Building, Sylhet",
  //     location: "Sylhet",
  //     imageSrc: img4,
  //      type: "Religious Center",
  //   },
  //   {
  //     id: 5,
  //     title: "DALL-E AI Estate Tower, Sylhet",
  //     location: "Sylhet",
  //     imageSrc: img5,
  //      type: "Religious Center",
  //   },
];
