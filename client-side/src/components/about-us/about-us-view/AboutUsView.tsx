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

interface IAboutUsViewProps {
  team: ITeamMemberList[];
}

const AboutUsView = ({ team }: IAboutUsViewProps) => {
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
          <div className={styles.rightSide}>
            <div className={styles.startTag}>
              <div className={styles.divider} />
              <p className={styles.tagText}>WHO WE ARE</p>
            </div>
            <div className={styles.textWrapper}>
              <p className={styles.title}>
                We are biggest Regional Consulting Firm in Sylhet Region Since
                1991
              </p>
              <p className={styles.subtitle}>
                ENGINEERING PLANNING CONSULTANCY TEAM (EPCT) offers specialized
                services in civil engineering, including urban planning,
                architecture, structural and foundation engineering, water
                resources, roads and highways, surveying, and soil
                investigation. Their multidisciplinary approach and commitment
                to innovation drive EPCT’s team, which aims to transfer
                technology for societal benefit and environmental improvement.
                With over 32 years of experience, EPCT has become the largest
                regional consulting firm in the Sylhet region.
              </p>
              <CoreButton
                isFullWidth={false}
                text="Contact Us"
                type="primary"
              />
            </div>
          </div>
        </Col>
      </Row>

      <Row gutter={[24, 24]} className={styles.marginX80} align="middle">
        <Col xs={24} lg={11}>
          <div className={styles.startTag}>
            <div className={styles.divider} />
            <p className={styles.tagText}>Our Core Values</p>
          </div>
          <p className={styles.title}>Principles That Inspire Excellence</p>
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
        <div className={styles.teamHeader}>
          <p className={styles.title}>Meet Our Team</p>
          <p className={styles.subtitle}>
            A team dedicated to bringing your vision to life.
          </p>
        </div>
        <Row gutter={[24, 100]}>
          {team
            .filter((member) => !member.isExTeam)
            .map((member) => (
              <Col xs={24} sm={12} md={8} lg={6} key={member?._id}>
                <div className={styles.teamCol}>
                  <TeamCard
                    imageSrc={member?.display_picture}
                    name={member.name}
                    position={member.position}
                    facebook={member.facebook}
                    twitter={member.twitter}
                    linkedin={member.linkedin}
                    exTeamMember={member.isExTeam}
                  />
                </div>
              </Col>
            ))}
        </Row>
      </div>

      <div className={styles.teamSection}>
        <div className={styles.teamHeader}>
          <p className={styles.title}>Our Ex Teammate</p>
          <p className={styles.subtitle}>
            People who helped us becamce what we are
          </p>
        </div>
        <Row gutter={[24, 100]}>
          {team
            .filter((member) => member.isExTeam)
            .map((member) => (
              <Col xs={24} sm={12} md={8} lg={6} key={member?._id}>
                <div className={styles.teamCol}>
                  <TeamCard
                    imageSrc={member?.display_picture}
                    name={member.name}
                    position={member.position}
                    facebook={member.facebook}
                    twitter={member.twitter}
                    linkedin={member.linkedin}
                    exTeamMember={member.isExTeam}
                  />
                </div>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default AboutUsView;
