import CoreBanner from "@/components/common/core-components/core-banner/CoreBanner";
import ResourcePageView from "@/components/resources/ResourcePageView";

const Resources = () => {
  return (
    <div>
      <CoreBanner
        title="Resources"
        subtitle="Read all our latest blogs and articles at one place"
        crumbOne="Home"
        crumbTwo="Resources"
      />

      <div className={"container-wrapper"}>
        <ResourcePageView />
      </div>
    </div>
  );
};

export default Resources;
