import CoreBanner from "@/components/common/core-components/core-banner/CoreBanner";
import PortfolioView from "@/components/portfolio/PortfolioView";
import { IPortfolio } from "@/models/portfolio.model";
import { getPortfolio } from "@/services/portfolio.service";
import { GetServerSideProps } from "next";

interface IPortfolioProps {
  portfolios: IPortfolio[];
}

const Portfolio = ({ portfolios }: IPortfolioProps) => {
  return (
    <div>
      <CoreBanner
        title="Portfolio"
        subtitle="Portfolio"
        crumbOne="Home"
        crumbTwo="Portfolio"
      />
      <div style={{ marginTop: "40px" }}>
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
