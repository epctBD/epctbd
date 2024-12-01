import { Modal } from "antd";
import React from "react";
import CoreButton from "../core-components/core-button/CoreButton";

interface IDeleteModalProps {
  isModalOpen: boolean;
  isLoading: boolean;
  setIsModalOpen: (value: boolean) => void;
  onDeleteClick: () => void;
}

const DeleteModal = ({
  isModalOpen,
  isLoading,
  setIsModalOpen,
  onDeleteClick,
}: IDeleteModalProps) => {
  return (
    <Modal
      key="update team member"
      title="Update Team Member"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <p style={{ fontSize: "20px" }}>Are you sure you want to delete it?</p>
        <div style={{ display: "flex", gap: "16px" }}>
          <CoreButton text="Cancel" onClick={() => setIsModalOpen(false)} />
          <CoreButton
            text="Delete"
            type="danger"
            onClick={onDeleteClick}
            loading={isLoading}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
