import AboutUsView from "@/components/about-us/about-us-view/AboutUsView";
import DecadeSectionView from "@/components/about-us/decade-section-view/DecadeSectionView";
import CoreBanner from "@/components/common/core-components/core-banner/CoreBanner";
import { ITeamMemberList } from "@/models/teamMember.model";
import { getTeamMembers } from "@/services/teamMember.service";
import { GetServerSideProps } from "next";

interface IAboutUsProps {
  team: ITeamMemberList[];
}

const AboutUs = ({ team }: IAboutUsProps) => {
  return (
    <div>
      <CoreBanner
        title="About Us"
        subtitle="About Us"
        crumbOne="Home"
        crumbTwo="About Us"
      />
      <div className={"container-wrapper"}>
        <AboutUsView team={team} />
        <DecadeSectionView />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getTeamMembers();

    console.log(response);
    return {
      props: {
        team: response,
      },
    };
  } catch (error) {
    console.error("Error fetching team members:", error);
    return {
      props: {
        team: [],
      },
    };
  }
};

export default AboutUs;
