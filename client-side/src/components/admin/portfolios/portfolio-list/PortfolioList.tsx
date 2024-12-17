import { IPortfolio } from "@/models/portfolio.model";
import { Image, message, Table } from "antd";
import React, { useState } from "react";

import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import AddPortfolio from "../add-portfolio/AddPortfolio";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { deletePortfolio } from "@/services/portfolio.service";
import DeleteModal from "@/components/common/delete-modal/DeleteModal";

interface IPortfolioListProps {
  portfolios: IPortfolio[];
  setPortfolios: React.Dispatch<React.SetStateAction<IPortfolio[]>>;
}

const PortfolioList = ({ portfolios, setPortfolios }: IPortfolioListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<IPortfolio>();
  const [loading, setLoading] = useState(false);

  const onDeleteClick = async () => {
    if (!selectedItem) return;

    setLoading(true);
    try {
      const response = await deletePortfolio(selectedItem._id);
      setPortfolios(response);

      message.success("Portfoliodeleted successfully!");
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting project:", error);
      message.error("Failed to delete project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
      title: "Actions",
      dataIndex: "_id",
      key: "display_picture",
      render: (id: string, item: IPortfolio) => (
        <div style={{ display: "flex", gap: "12px" }}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              // setUpdateModalOpen(true);
              setSelectedItem(item);
            }}
          >
            <EditFilled />
          </div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDeleteModalOpen(true);
              setSelectedItem(item);
            }}
          >
            <DeleteFilled />
          </div>
        </div>
      ),
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

        {/* {updateModalOpen && (
          <UpdatePortfolio
            isModalOpen={updateModalOpen}
            setIsModalOpen={setUpdateModalOpen}
            project={selectedItem || null}
            setProjects={setProjects}
          />
        )} */}

        {deleteModalOpen && (
          <DeleteModal
            isModalOpen={deleteModalOpen}
            setIsModalOpen={setDeleteModalOpen}
            onDeleteClick={onDeleteClick}
            isLoading={loading}
          />
        )}
      </div>
    </div>
  );
};

export default PortfolioList;
