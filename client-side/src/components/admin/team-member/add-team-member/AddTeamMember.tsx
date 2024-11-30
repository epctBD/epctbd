import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import CoreImageUploader from "@/components/common/core-components/core-image-uploader/CoreImageUploader";
import { ITeamMember, ITeamMemberList } from "@/models/teamMember.model";
import { createTeamMember } from "@/services/teamMember.service";
import { Input, message, Modal, Radio } from "antd";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";

interface IAddTeamMemberModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  setTeamMembers: React.Dispatch<React.SetStateAction<ITeamMemberList[]>>;
}

const AddTeamMember = ({
  isModalOpen,
  setIsModalOpen,
  setTeamMembers,
}: IAddTeamMemberModalProps) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ITeamMember>();

  const [imageData, setImageData] = useState<File | null>(null);
  const [imageB64, setImageB64] = useState<string | null>(null);

  const onFileChange = (file: File | null) => {
    setImageData(file);
  };

  const onLoadEnd = (image: string) => {
    setImageB64(image);
  };

  const onSubmit = async (data: ITeamMember) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("position", data.position);
      formData.append("isExTeam", data.isExTeam ? "true" : "false");

      if (imageData) {
        formData.append("display_picture", imageData);
      }

      const response = await createTeamMember(formData);
      setTeamMembers(response);
      message.success("Team member added successfully!");
      reset();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding team member:", error);
      message.error("Failed to add team member. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      key="add team member"
      title="Add Team Member"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ marginBottom: "15px" }}>
          <label>Name</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter name" />
            )}
          />
          {errors.name && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Position</label>
          <Controller
            name="position"
            control={control}
            rules={{ required: "Position is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter position" />
            )}
          />
          {errors.position && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.position.message}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label className="general-label">Member Image</label>
          <CoreImageUploader
            buttonText="Upload Image"
            onFileChange={onFileChange}
            onLoadEnd={onLoadEnd}
            imageB64={imageB64 || ""}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Is Ex-Team Member?</label>
          <Controller
            name="isExTeam"
            control={control}
            render={({ field }) => (
              <Radio.Group {...field}>
                <Radio value={false}>No</Radio>
                <Radio value={true}>Yes</Radio>
              </Radio.Group>
            )}
          />
        </div>

        <CoreButton
          text="Add Team Member"
          type="primary"
          htmlType="submit"
          loading={loading}
        />
      </form>
    </Modal>
  );
};

export default AddTeamMember;
