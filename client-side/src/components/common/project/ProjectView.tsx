import { IProject } from "@/models/project.model";
import { Col, message, Row, Tabs, TabsProps } from "antd";
import React, { useEffect, useState } from "react";
import ProjectCard from "../project-card/ProjectCard";
import { getProjects } from "@/services/project.service";
import styles from "./ProjectView.module.scss";
import { useRouter } from "next/router";

interface IProjectViewProps {
  projectList: IProject[];
  setProjectList: React.Dispatch<React.SetStateAction<IProject[]>>;
}

const ProjectView = ({ projectList, setProjectList }: IProjectViewProps) => {
  const router = useRouter();
  const [isLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const { tab } = router.query;

  const [activeKey, setActiveKey] = useState("Ongoing Projects");

  useEffect(() => {
    if (tab) {
      setActiveKey(tab as any);
      setSelectedCategory(tab as any);
    }
  }, [tab]);

  const getFilteredProjects = async () => {
    try {
      const response = await getProjects(selectedCategory);
      setProjectList(response);
    } catch (error) {
      message.error(`Error getting projects: ${error}`);
    } finally {
      //   setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      getFilteredProjects();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const items: TabsProps["items"] = [
    {
      key: "Ongoing Projects",
      label: "Ongoing Projects",
    },
    {
      key: "Government Projects",
      label: "Government Projects",
    },
    {
      key: "Private Projects",
      label: "Private Projects",
    },
    {
      key: "Highlighted Projects",
      label: "Highlighted Projects",
    },
  ];

  const onTabChange = (key: string) => {
    const selectedTab = items?.find((item) => item.key === key);
    if (selectedTab) {
      setActiveKey(selectedTab?.key as any);
      setSelectedCategory(selectedTab?.label as string);
    }
  };

  return (
    <div className={styles.projectViewWrapper}>
      <div className={styles.projectTabWrapper}>
        <Tabs
          defaultActiveKey="1"
          activeKey={activeKey}
          items={items}
          onChange={onTabChange}
        />
      </div>
      <Row justify="center" gutter={[24, 24]}>
        {isLoading ? (
          <div className="project-card-loader">loading</div>
        ) : projectList?.length <= 0 ? (
          <div className="no-data">No data</div>
        ) : (
          projectList?.map((project: IProject, index) => (
            <Col span={8} xs={24} sm={24} md={12} lg={8} key={project?._id}>
              <div className={styles.projectCardWrapper}>
                <ProjectCard
                  id={project._id}
                  title={project.name}
                  location={project.location || ""}
                  imageSrc={project.projectImages?.[0] || ""}
                  type={project.serviceType}
                  slug={project.projectSlug || ""}
                />
              </div>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default ProjectView;
