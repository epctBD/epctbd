import CoreBanner from "@/components/common/core-components/core-banner/CoreBanner";
import ServicesView from "@/components/services/services-view/ServicesView";

const Services = () => {
  return (
    <div>
      <CoreBanner
        title="Our Services"
        subtitle="Services"
        crumbOne="Home"
        crumbTwo="Services"
      />
      <div className={"container-wrapper"}>
        <ServicesView />
      </div>
    </div>
  );
};

export default Services;
