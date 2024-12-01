import { IPortfolio } from "@/models/portfolio.model";
import { Image, Table } from "antd";
import React, { useState } from "react";

import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import AddPortfolio from "../add-portfolio/AddPortfolio";

interface IPortfolioListProps {
  portfolios: IPortfolio[];
  setPortfolios: React.Dispatch<React.SetStateAction<IPortfolio[]>>;
}

const PortfolioList = ({ portfolios, setPortfolios }: IPortfolioListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Subtitle",
      dataIndex: "subtitle",
      key: "subtitle",
    },
    {
      title: "Feature Image",
      dataIndex: "feature_image",
      key: "feature_image",
      render: (src: string) => (
        <Image src={src} alt="Feature Image" width={80} height={80} />
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: string) => new Date(createdAt).toLocaleDateString(),
    },
    {
      title: "Updated At",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (updatedAt: string) => new Date(updatedAt).toLocaleDateString(),
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>Portfolios</h1>
        <CoreButton
          text="Add Portfolio"
          type="primary"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <div style={{ marginTop: "24px" }}>
        <Table
          dataSource={portfolios}
          columns={columns}
          rowKey="_id"
          bordered
          pagination={{ pageSize: 10 }}
        />

        <AddPortfolio
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          setPortfolios={setPortfolios}
        />
      </div>
    </div>
  );
};

export default PortfolioList;
