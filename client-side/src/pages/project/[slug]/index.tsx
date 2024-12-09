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
      "A beautiful modern home design focusing on minimalist aesthetics and functionality.",
    serviceType: "Architecture",
    category: "Residential",
    area: "2500 sqft",
    projectYear: "2023",
    designer: "John Doe",
    location: "San Francisco, CA",
    projectOverview:
      "The project encompasses modern design principles with sustainable building materials.",
    keyFeatures:
      "Open floor plan, Smart home integration, Sustainable materials",
    outcome:
      "A stunning, eco-friendly residence with a blend of aesthetics and comfort.",
    projectImages: [
      "../../../../public/Carousel/1.png",
      "../../../../public/Carousel/2.png",
      "../../../../public/Carousel/3.png",
      "../../../../public/Carousel/4.jpeg",
    ],
  };

  return {
    props: {
      project,
    },
  };
};

export default ProjectDetails;
