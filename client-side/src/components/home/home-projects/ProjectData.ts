import { StaticImageData } from "next/image";
import img1 from "../../../../public/Carousel/1.png";
import img2 from "../../../../public/Carousel/2.png";
import img3 from "../../../../public/Carousel/3.png";

export interface IProjectCard {
  id: string;
  title: string;
  location: string;
  imageSrc: StaticImageData;
  type: string;
  // imgHeight: number;
}

export const ProjectData: IProjectCard[] = [
  {
    id: "1",
    title: "Baytus Salam Jame Mosque, Beanibazar",
    location: "Beanibazar",
    imageSrc: img1,
    type: "Religious Center",
    // imgHeight: 460,
  },
  {
    id: "2",
    title: "Lion's Hospital, Kumarpara, Sylhet",
    location: "Sylhet",
    imageSrc: img2,
    type: "Medical Facility",
    // imgHeight: 435,
  },
  {
    id: "3",
    title: "Popular Diagnostic Centre, Sylhet",
    location: "Sylhet",
    imageSrc: img3,
    type: "Diagnostic Center",
    // imgHeight: 560,
  },
  {
    id: "4",
    title: "Baytus Salam Jame Mosque, Beanibazar",
    location: "Beanibazar",
    imageSrc: img1,
    type: "Religious Center",
    // imgHeight: 460,
  },
  {
    id: "5",
    title: "Lion's Hospital, Kumarpara, Sylhet",
    location: "Sylhet",
    imageSrc: img2,
    type: "Medical Facility",
    // imgHeight: 435,
  },
  {
    id: "6",
    title: "Popular Diagnostic Centre, Sylhet",
    location: "Sylhet",
    imageSrc: img3,
    type: "Diagnostic Center",
    // imgHeight: 560,
  },
  {
    id: "7",
    title: "Baytus Salam Jame Mosque, Beanibazar",
    location: "Beanibazar",
    imageSrc: img1,
    type: "Religious Center",
    // imgHeight: 460,
  },
  {
    id: "8",
    title: "Lion's Hospital, Kumarpara, Sylhet",
    location: "Sylhet",
    imageSrc: img2,
    type: "Medical Facility",
    // imgHeight: 435,
  },
  {
    id: "9",
    title: "Popular Diagnostic Centre, Sylhet",
    location: "Sylhet",
    imageSrc: img3,
    type: "Diagnostic Center",
    // imgHeight: 560,
  },
];
