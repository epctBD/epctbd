import ServiceCard from "@/components/common/service-card/ServiceCard";
import image from "@/components/common/service-card/service.png";
import Link from "next/link";

const Services = () => {
  return (
    <div>
      <Link href={"/services/interior-design"}>
        <ServiceCard
          image={image}
          title="Interior Design"
          subtitle="Crafting spaces that inspire and elevate."
        />
      </Link>
    </div>
  );
};

export default Services;
