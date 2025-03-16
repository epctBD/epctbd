import CoreTitles from "@/components/common/core-titles/CoreTitles";
import styles from "./HomeProjects.module.scss";
import ProjectCard from "@/components/common/project-card/ProjectCard";
import { Row, Col, Button } from "antd";
import { IProject } from "@/models/project.model";
import { useRouter } from "next/router";
import { RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

interface HomeProjectsProps {
  projects: IProject[];
}

const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: index * 0.3 },
  }),
};

const HomeProjects = ({ projects }: HomeProjectsProps) => {
  const router = useRouter();
  const goToAboutUs = () => {
    router.push("about-us");
  };

  return (
    <div className={styles.projectsWrapper}>
      <CoreTitles
        subTitle="Our Projects"
        title="In the Spotlight: Our Featured Projects"
        intro="Explore the key projects that represent the best of what we do"
      />

      <Row gutter={[16, 16]} justify="center">
        <Col span={24}>
          <div className={styles.ButtonSeeMoreWrapper}>
            <Button
              style={{
                color: "#0077EE",
                fontSize: "18px",
                fontWeight: "600",

                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
              }}
              type="text"
              onClick={goToAboutUs}
              icon={<RightOutlined style={{ fontSize: "20px" }} />}
            >
              Explore More
            </Button>
          </div>
        </Col>
        {projects.length <= 0 ? (
          <div className="no-data">
            <p className="no-data-text">No Project Available</p>
          </div>
        ) : (
          projects?.slice(0, 3)?.map((project, index) => (
            <Col
              key={project.projectSlug}
              xs={24}
              sm={24}
              md={12}
              lg={8}
              xl={8}
            >
              <motion.div
                className={styles.projectCardWrapper}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <ProjectCard
                  id={project._id}
                  title={project.name}
                  location={project.location || ""}
                  imageSrc={project.projectImages?.[0] || ""}
                  type={project.serviceType}
                  category={""}
                  slug={project.projectSlug || ""}
                />
              </motion.div>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default HomeProjects;
