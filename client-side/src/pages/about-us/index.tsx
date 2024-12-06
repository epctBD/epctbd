import AboutUsView from "@/components/about-us/about-us-view/AboutUsView";
import CoreBanner from "@/components/common/core-components/core-banner/CoreBanner";

const AboutUs = () => {
  return (
    <div>
      <CoreBanner
        title="About Us"
        subtitle="Portfolio"
        crumbOne="Home"
        crumbTwo="Portfolio"
      />
      <div className={"container-wrapper"}>
        <AboutUsView />
      </div>
    </div>
  );
};

export default AboutUs;
