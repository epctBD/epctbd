import { GetServerSideProps } from "next";
import ProjectDetailsComponent from "@/components/project/project-details/ProjectDetails";
import { IProject } from "@/models/project.model";
import { getProject } from "@/services/project.service";

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { projectSlug } = context.query;

  if (typeof projectSlug !== "string") {
    return {
      notFound: true,
    };
  }

  try {
    const response = await getProject(projectSlug);

    console.log(response);
    return {
      props: {
        project: response,
      },
    };
  } catch (error) {
    console.error("Error fetching projects:", error);
    return {
      props: {
        project: null,
      },
    };
  }
};

export default ProjectDetails;
