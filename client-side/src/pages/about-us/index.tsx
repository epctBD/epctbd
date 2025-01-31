import AboutUsView from "@/components/about-us/about-us-view/AboutUsView";
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
        subtitle="Discover Who We Are and What We Stand For"
        crumbOne="Home"
        crumbTwo="About Us"
      />
      <div className={"container-wrapper"}>
        <AboutUsView team={team} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getTeamMembers();
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
