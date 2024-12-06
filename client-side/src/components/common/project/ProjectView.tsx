import { IProject } from "@/models/project.model";
import { Col, message, Row, Tabs, TabsProps } from "antd";
import React, { useEffect, useState } from "react";
import ProjectCard from "../project-card/ProjectCard";
import { getProjects } from "@/services/project.service";
import styles from "./ProjectView.module.scss";

interface IProjectViewProps {
  projectList: IProject[];
  setProjectList: React.Dispatch<React.SetStateAction<IProject[]>>;
}

const ProjectView = ({ projectList, setProjectList }: IProjectViewProps) => {
  const [isLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (selectedCategory) {
      getFilteredProjects();
    }
  }, [selectedCategory]);

  const getFilteredProjects = async () => {
    try {
      const response = await getProjects(selectedCategory);
      setProjectList(response);
    } catch (error) {
      console.error("Error adding portfolio:", error);
      message.error("Failed to add portfolio. Please try again.");
    } finally {
      //   setLoading(false);
    }
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Ongoing Projects",
    },
    {
      key: "2",
      label: "Government Projects",
    },
    {
      key: "3",
      label: "Private Projects",
    },
    {
      key: "4",
      label: "Highlighted Projects",
    },
  ];

  const onTabChange = (key: string) => {
    const selectedTab = items?.find((item) => item.key === key);
    if (selectedTab) {
      setSelectedCategory(selectedTab?.label as string);
    }
  };

  return (
    <div className={styles.projectViewWrapper}>
      <div className={styles.projectTabWrapper}>
        <Tabs defaultActiveKey="1" items={items} onChange={onTabChange} />
      </div>
      <Row justify="center" align="middle" gutter={[24, 24]}>
        {isLoading ? (
          <div className="project-card-loader">loading</div>
        ) : projectList?.length <= 0 ? (
          <div className="no-data">No data</div>
        ) : (
          projectList?.map((project: IProject) => (
            <Col span={8} xs={24} sm={24} md={12} lg={8} key={project?._id}>
              <ProjectCard
                id={project._id}
                title={project.name}
                location={project.location || ""}
                imageSrc={project.projectImages?.[0] || ""}
                type={project.serviceType}
              />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default ProjectView;
