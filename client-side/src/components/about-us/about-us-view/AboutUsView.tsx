import { Col, Row } from "antd";
import styles from "./AboutUsView.module.scss";
import Image from "next/image";
import img from "../about-us.png";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import ValueCard from "../value-card/ValueCard";
import FounderSection from "../founder-section/FounderSection";
import { ITeamMemberList } from "@/models/teamMember.model";
import TeamCard from "@/components/common/team-card/TeamCard";
import DecadeSectionView from "../decade-section-view/DecadeSectionView";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

interface IAboutUsViewProps {
  team: ITeamMemberList[];
}

const containerVariants = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.5 }, // Delayed by 0.5s
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: index * 0.2 },
  }),
};

const AboutUsView = ({ team }: IAboutUsViewProps) => {
  const router = useRouter();

  return (
    <div className={styles.aboutUsWrapper}>
      <Row gutter={[24, 24]} align="middle">
        <Col xs={24} lg={11}>
          <div className={styles.leftSide}>
            <div className={styles.imageWrapper}>
              <Image src={img} alt="About us image" />
            </div>
          </div>
        </Col>
        <Col xs={24} lg={13}>
          <motion.div
            className={styles.rightSide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            <div className={styles.startTag}>
              <div className={styles.divider} />
              <motion.p className={styles.tagText} variants={textVariants}>
                WHO WE ARE
              </motion.p>
            </div>
            <div className={styles.textWrapper}>
              <motion.p className={styles.title} variants={textVariants}>
                We are biggest Regional Consulting Firm in Sylhet Region Since
                1991
              </motion.p>
              <motion.p
                className={styles.subtitle}
                variants={descriptionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                ENGINEERING PLANNING CONSULTANCY TEAM (EPCT) is professionally
                equipped to providing services in Civil Engineering related
                Projects — Physical planning (Rural & Urban), Architecture,
                Structural Engineering, Foundation Engineering, Water Resource
                Engineering, Roads & Highways, Survey, Soil Investigation,
                Feasibility Study. <br />
                <br />
                Team approach is considered the appropriate tool to face the
                multidisciplinary aspects of the present day need of integrating
                the specialisation. EPCT has organised itself to cater the need
                of this approach. ‘FREE LANCER must always think of new ideas &
                new approaches if he is to keep selling’. This is the inherent
                driving force for EPCT professionals. <br />
                <br />
                Finally EPCT intends to emerge steadily as efficient vehicles
                for technology transfer to the Society for better environment by
                using the tool of Social Engineering. EPCT, in last 32 years,
                has emerged as biggest Regional Consulting Firm in Sylhet
                region.
              </motion.p>
              <CoreButton
                isFullWidth={false}
                text="Contact Us"
                type="primary"
                onClick={() => router.push("contact-us")}
              />
            </div>
          </motion.div>
        </Col>
      </Row>

      <Row gutter={[24, 24]} className={styles.marginX80} align="middle">
        <Col xs={24} lg={11}>
          <motion.div
            className={styles.startTag}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            <div className={styles.divider} />
            <motion.p className={styles.tagText} variants={textVariants}>
              Our Core Values
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            <motion.p className={styles.title} variants={textVariants}>
              Principles That Inspire Excellence
            </motion.p>
          </motion.div>
        </Col>
        <Col xs={24} lg={13}>
          <div className={styles.valueCardWrapper}>
            <div
              className={`${styles.valueCardInnerWrapper} ${styles.marginLeft}`}
            >
              <ValueCard />
              <ValueCard />
            </div>
            <div className={styles.valueCardInnerWrapper}>
              <ValueCard />
              <ValueCard />
            </div>
          </div>
        </Col>
      </Row>

      <div className={styles.marginX80}>
        <FounderSection />
      </div>

      <DecadeSectionView />

      <div className={styles.teamSection}>
        <motion.div
          className={styles.teamHeader}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.p className={styles.title} variants={textVariants}>
            Meet Our Team
          </motion.p>
          <motion.p className={styles.subtitle} variants={textVariants}>
            A team dedicated to bringing your vision to life.
          </motion.p>
        </motion.div>
        <Row gutter={[24, 100]}>
          {team.filter((member) => !member.isExTeam).length > 0 ? (
            team
              .filter((member) => !member.isExTeam)
              .map((member, index) => (
                <Col xs={24} sm={12} md={8} lg={6} key={member?._id}>
                  <motion.div
                    className={styles.teamCol}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={index}
                  >
                    <TeamCard
                      imageSrc={member?.display_picture}
                      name={member.name}
                      position={member.position}
                      facebook={member.facebook}
                      twitter={member.twitter}
                      linkedin={member.linkedin}
                      exTeamMember={member.isExTeam}
                    />
                  </motion.div>
                </Col>
              ))
          ) : (
            <div className="no-data">
              <p className="no-data-text">No Team Member Available</p>
            </div>
          )}
        </Row>
      </div>

      <div className={styles.teamSection}>
        <motion.div
          className={styles.teamHeader}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.p className={styles.title} variants={textVariants}>
            Our Ex Teammate
          </motion.p>
          <motion.p className={styles.subtitle} variants={textVariants}>
            People who helped us becamce what we are
          </motion.p>
        </motion.div>
        <Row gutter={[24, 100]}>
          {team.filter((member) => member.isExTeam).length > 0 ? (
            team
              .filter((member) => member.isExTeam)
              .map((member, index) => (
                <Col xs={24} sm={12} md={8} lg={6} key={member?._id}>
                  <motion.div
                    className={styles.teamCol}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={index}
                  >
                    <TeamCard
                      imageSrc={member?.display_picture}
                      name={member.name}
                      position={member.position}
                      facebook={member.facebook}
                      twitter={member.twitter}
                      linkedin={member.linkedin}
                      exTeamMember={member.isExTeam}
                    />
                  </motion.div>
                </Col>
              ))
          ) : (
            <div className="no-data">
              <p className="no-data-text">No Ex-Team Member Available</p>
            </div>
          )}
        </Row>
      </div>
    </div>
  );
};

export default AboutUsView;
