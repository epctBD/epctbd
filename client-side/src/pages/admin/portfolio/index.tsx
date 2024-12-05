import AdminLayout from "@/components/layout/admin-layout/AdminLayout";
import { IPortfolio } from "@/models/portfolio.model";
import { getPortfolio } from "@/services/portfolio.service";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const PortfolioList = dynamic(
  () => import("@/components/admin/portfolios/portfolio-list/PortfolioList"),
  {
    ssr: false,
  }
);

interface IPortfolioProps {
  portfolios: IPortfolio[];
}

const Portfolio = ({ portfolios }: IPortfolioProps) => {
  const [portfolioList, setPortfolioList] = useState<IPortfolio[]>(portfolios);

  return (
    <AdminLayout>
      <PortfolioList
        portfolios={portfolioList}
        setPortfolios={setPortfolioList}
      />
    </AdminLayout>
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
    console.error("Error fetching portfolios:", error);
    return {
      props: {
        portfolios: [],
      },
    };
  }
};

export default Portfolio;
