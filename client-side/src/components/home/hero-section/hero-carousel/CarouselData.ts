interface CarouselItem {
  id: number;
  imageId: string;
  title: string;
  projectType: string;
  projectIntro: string;
}

export const carouselData: CarouselItem[] = [
  {
    id: 1,
    imageId:
      "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888970/services_image/Urban_Planning.jpg",
    title: "Baytus Salam Jame Mosque, Beanibazar",
    projectType: "Religious Center",
    projectIntro:
      "An architectural marvel combining traditional Islamic design with modern construction techniques, creating a spiritual sanctuary.",
  },
  {
    id: 2,
    imageId:
      "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888970/services_image/Urban_Planning.jpg",
    title: "Lion's Hospital, Kumarpara, Sylhet",
    projectType: "Healthcare Facility",
    projectIntro:
      "A state-of-the-art hospital offering advanced medical services, ensuring comprehensive patient care for the local community.",
  },
  {
    id: 6,
    imageId:
      "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888970/services_image/Urban_Planning.jpg",
    title: "Gemini 2040 Tower, Sylhet",
    projectType: "Feature Architect",
    projectIntro:
      "A premier commercial complex blending futuristic design with sustainable practices, offering world-class business spaces.",
  },
  {
    id: 3,
    imageId:
      "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888970/services_image/Urban_Planning.jpg",
    title: "Popular Diagnostic Centre, Sylhet",
    projectType: "Diagnostic Center",
    projectIntro:
      "Equipped with cutting-edge technology, this center provides accurate diagnostic services to support efficient medical treatments.",
  },
  {
    id: 4,
    imageId:
      "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888970/services_image/Urban_Planning.jpg",
    title: "Futuristic AI Imagine Building, Sylhet",
    projectType: "Innovation Hub",
    projectIntro:
      "A modern hub for AI research and development, fostering collaboration and innovation in emerging technologies.",
  },
  {
    id: 5,
    imageId:
      "https://res.cloudinary.com/dv5lxcotq/image/upload/v1736888970/services_image/Urban_Planning.jpg",
    title: "DALL-E AI Estate Tower, Sylhet",
    projectType: "Commercial Tower",
    projectIntro:
      "A premier commercial complex blending futuristic design with sustainable practices, offering world-class business spaces.",
  },
];
