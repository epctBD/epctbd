export interface IProjectCard {
  id: string;
  title: string;
  location: string;
  imageSrc: string;
  type: string;
  projectSlug: string;
}

export const ProjectData: IProjectCard[] = [
  {
    id: "1",
    title: "Baytus Salam Jame Mosque, Beanibazar",
    location: "Beanibazar",
    imageSrc: "/Carousel/1.png", // Corrected path
    type: "Religious Center",
    projectSlug: " 1asdsa",
  },
  {
    id: "2",
    title: "Lion's Hospital, Kumarpara, Sylhet",
    location: "Sylhet",
    imageSrc: "/Carousel/2.png", // Corrected path
    type: "Medical Facility",
    projectSlug: " 1asdsa",
  },
  {
    id: "3",
    title: "Popular Diagnostic Centre, Sylhet",
    location: "Sylhet",
    imageSrc: "/Carousel/3.png", // Corrected path
    type: "Diagnostic Center",
    projectSlug: " 1asdsa",
  },
  {
    id: "4",
    title: "Baytus Salam Jame Mosque, Beanibazar",
    location: "Beanibazar",
    imageSrc: "/Carousel/1.png", // Corrected path
    type: "Religious Center",
    projectSlug: " 1asdsa",
  },
];
