import { IProject } from "@/models/project.model";
import { Col, message, Row, Spin, Tabs, TabsProps } from "antd";
import React, { useEffect, useState } from "react";
import ProjectCard from "../project-card/ProjectCard";
import { getProjects } from "@/services/project.service";
import styles from "./ProjectView.module.scss";
import { useRouter } from "next/router";
import { LoadingOutlined } from "@ant-design/icons";

interface IProjectViewProps {
  projectList: IProject[];
  setProjectList: React.Dispatch<React.SetStateAction<IProject[]>>;
}

const ProjectView = ({ projectList, setProjectList }: IProjectViewProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const tab = Array.isArray(router.query.tab)
    ? router.query.tab[0]
    : router.query.tab;
  const [activeKey, setActiveKey] = useState("Ongoing Projects");

  useEffect(() => {
    if (tab) {
      setActiveKey(tab);
      setSelectedCategory(tab);
    }
  }, [tab]);

  const getFilteredProjects = async () => {
    if (selectedCategory === "Government Projects") return;

    setIsLoading(true);
    try {
      const response = await getProjects(selectedCategory);
      setProjectList(response);
    } catch (error) {
      message.error(`Error getting projects: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCategory) {
      getFilteredProjects();
    }
  }, [selectedCategory]);

  const items: TabsProps["items"] = [
    { key: "Ongoing Projects", label: "Ongoing Projects" },
    { key: "Private Projects", label: "Private Projects" },
    { key: "Highlighted Projects", label: "Highlighted Projects" },
    { key: "Government Projects", label: "Government Projects" },
  ];

  const onTabChange = (key: string) => {
    setActiveKey(key);
    setSelectedCategory(key);
  };

  return (
    <div className={styles.projectViewWrapper}>
      <div className={styles.projectTabWrapper}>
        <Tabs activeKey={activeKey} items={items} onChange={onTabChange} />
      </div>

      <Row justify="center" gutter={[24, 24]}>
        {isLoading ? (
          <div className="project-card-loader">
            <Spin indicator={<LoadingOutlined spin />} size="large" />
          </div>
        ) : selectedCategory === "Government Projects" ? (
          <Col span={8} xs={24} sm={24} md={12} lg={8}>
            <div className={styles.projectCardWrapper}>
              <ProjectCard
                id="default-gov"
                title="Government Project"
                location="Bangladesh"
                imageSrc="https://res.cloudinary.com/dv5lxcotq/image/upload/v1736882114/samples/ecommerce/car-interior-design.jpg"
                type="Public Service"
                category="Government Projects"
                slug=""
              />
            </div>
          </Col>
        ) : projectList.length === 0 ? (
          <div className={styles.noData}>No Project Available</div>
        ) : (
          projectList.map((project: IProject) => {
            console.log(project?.category);
            return (
              <Col span={8} xs={24} sm={24} md={12} lg={8} key={project._id}>
                <div className={styles.projectCardWrapper}>
                  <ProjectCard
                    id={project._id}
                    title={project.name}
                    location={project.location || ""}
                    imageSrc={project.projectImages?.[0] || ""}
                    type={project.serviceType}
                    category={selectedCategory || ""}
                    slug={project.projectSlug || ""}
                  />
                </div>
              </Col>
            );
          })
        )}
      </Row>
    </div>
  );
};

export default ProjectView;
