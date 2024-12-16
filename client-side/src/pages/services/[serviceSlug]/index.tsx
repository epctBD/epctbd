import { services } from "@/components/services/constant";
import { useRouter } from "next/router";

import ServiceDetailsView from "@/components/services/service-details-view/ServiceDetailsView";

const ServiceDetails = () => {
  const router = useRouter();
  const { serviceSlug } = router.query;

  const service = services.find((s) => s.serviceSlug === serviceSlug);

  if (!service) {
    return <p>Service not found!</p>;
  }

  return (
    <div className={"container-wrapper"}>
      <ServiceDetailsView service={service} />
    </div>
  );
};

export default ServiceDetails;
