import { GetServerSideProps } from "next";
import ProjectDetailsComponent from "@/components/project/project-details/ProjectDetails";
import { IProject } from "@/models/project.model";

interface ProjectDetailsProps {
  project: IProject;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div>
      <ProjectDetailsComponent project={project} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const project: IProject = {
    _id: "1",
    slug: "modern-home-design",
    name: "Modern Home Design",
    details:
      "This modern home design is a showcase of minimalist aesthetics paired with cutting-edge functionality. The architecture seamlessly blends contemporary elements with timeless appeal, creating a residence that exudes sophistication and practicality. Every detail has been thoughtfully curated to provide a harmonious living experience, from the clean lines of the exterior to the thoughtfully designed interior spaces.",
    serviceType: "Architecture",
    category: "Residential",
    area: "2500 sqft",
    projectYear: "2023",
    designer: "John Doe",
    location: "San Francisco, CA",
    projectOverview:
      "This project is an exemplary model of modern architecture, integrating both form and function. By utilizing sustainable building materials and cutting-edge technology, the design emphasizes environmental responsibility without compromising on luxury. Spacious interiors and an open floor plan encourage natural light and airflow, ensuring the home feels both welcoming and energy-efficient. Situated in the heart of San Francisco, this residence is a testament to the potential of sustainable urban development. The home's design fosters a sense of connection between indoor and outdoor spaces, creating an ambiance of tranquility.",
    keyFeatures:
      "Open floor plan to maximize usability and flexibility of space, seamless smart home integration for ultimate convenience, construction with environmentally friendly and sustainable materials, large windows and skylights for optimal natural lighting, outdoor spaces designed for leisure and entertainment.",
    outcome:
      "The result of this ambitious project is a visually striking, highly functional home that perfectly embodies modern living ideals. The combination of aesthetic appeal and practical design has set a new standard in luxury residential architecture. Homeowners and visitors alike are captivated by the seamless blend of eco-friendliness and elegance. This residence not only meets the expectations of modern homeowners but also serves as an inspiration for sustainable design in urban settings.",
    projectImages: [
      "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%282%29.png",
      "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%281%29.png",
      "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image.png",
      "https://res.cloudinary.com/dpx6xtelq/image/upload/v1733483186/uploaded_images/image%20%281%29.png",
    ],
  };

  return {
    props: {
      project,
    },
  };
};

export default ProjectDetails;
