import CoreBanner from "@/components/common/core-components/core-banner/CoreBanner";
import { IPortfolio } from "@/models/portfolio.model";
import { getPortfolio } from "@/services/portfolio.service";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";

const PortfolioView = dynamic(
  () => import("@/components/portfolio/PortfolioView"),
  {
    ssr: false,
  }
);

interface IPortfolioProps {
  portfolios: IPortfolio[];
}

const Portfolio = ({ portfolios }: IPortfolioProps) => {
  return (
    <div>
      <CoreBanner
        title="Portfolio"
        subtitle="A Glimpse Into Our Creative Journey"
        crumbOne="Home"
        crumbTwo="Portfolio"
      />
      <div className={"container-wrapper"}>
        <PortfolioView portfolios={portfolios} />
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await getPortfolio();
    return {
      props: {
        portfolios: response,
      },
    };
  } catch (error) {
    console.error("Error fetching team members:", error);
    return {
      props: {
        portfolios: [],
      },
    };
  }
};

export default Portfolio;
