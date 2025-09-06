"use client";

import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import CoreImageUploader from "@/components/common/core-components/core-image-uploader/CoreImageUploader";
import type { ITeamMember, ITeamMemberList } from "@/models/teamMember.model";
import { createTeamMember } from "@/services/teamMember.service";
import { Input, message, Modal, Radio } from "antd";
import type React from "react";
import { useState, useEffect } from "react";
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
  const [resetKey, setResetKey] = useState(0);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm<ITeamMember>();

  const [imageData, setImageData] = useState<string | null>(null);

  // Reset the image when the modal opens
  useEffect(() => {
    if (isModalOpen) {
      setImageData(null);
      setResetKey((prev) => prev + 1);
    }
  }, [isModalOpen]);

  const onSubmit = async (data: ITeamMember) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("position", data.position);
      formData.append("isExTeam", data.isExTeam ? "true" : "false");
      formData.append("facebook", data.facebook || "");
      formData.append("twitter", data.twitter || "");
      formData.append("linkedin", data.linkedin || "");

      if (imageData) {
        formData.append("display_picture", imageData);
      }

      const response = await createTeamMember(formData);
      setTeamMembers(response);
      message.success("Team member added successfully!");
      setImageData(null);
      reset();
      setResetKey((prev) => prev + 1);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding team member:", error);
      message.error("Failed to add team member. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (image: string | null) => {
    setImageData(image);
  };

  const isExMember = watch("isExTeam");

  return (
    <Modal
      key="add team member"
      title="Add Team Member"
      open={isModalOpen}
      onCancel={() => {
        setIsModalOpen(false);
        setImageData(null);
        reset();
        setResetKey((prev) => prev + 1);
      }}
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Name</label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter name"
                className={"general-input"}
              />
            )}
          />
          {errors.name && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Position</label>
          <Controller
            name="position"
            control={control}
            rules={{ required: "Position is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter position"
                className={"general-input"}
              />
            )}
          />
          {errors.position && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.position.message}
            </p>
          )}
        </div>

        <div className={"general-input-wrapper"}>
          <label className="general-label">Member Image</label>
          <div style={{ cursor: "pointer", maxWidth: "76px" }}>
            <CoreImageUploader
              key={`image-uploader-${resetKey}`}
              onImageUpload={handleImageUpload}
              existingImage=""
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "12px",
          }}
        >
          <label className={"general-label"}>Is Ex-Team Member?</label>
          <Controller
            name="isExTeam"
            control={control}
            render={({ field }) => (
              <Radio.Group {...field}>
                <Radio value={false}>No</Radio>
                <Radio value={true}>Yes</Radio>
              </Radio.Group>
            )}
            rules={{
              validate: (value) =>
                value !== undefined || "Ex Team member is required",
            }}
          />
          {errors.isExTeam && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.isExTeam.message}
            </p>
          )}
        </div>

        {!isExMember && (
          <div className={"general-input-wrapper"}>
            <label className={"general-label"}>Facebook Handle Link</label>
            <Controller
              name="facebook"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter Facebook Handel"
                  className={"general-input"}
                />
              )}
            />
          </div>
        )}

        {!isExMember && (
          <div className={"general-input-wrapper"}>
            <label className={"general-label"}>Twitter Handle Link</label>
            <Controller
              name="twitter"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter Twitter Handel"
                  className={"general-input"}
                />
              )}
            />
          </div>
        )}

        {!isExMember && (
          <div className={"general-input-wrapper"}>
            <label className={"general-label"}>Linkedin Handle Link</label>
            <Controller
              name="linkedin"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter Linkedin Handel"
                  className={"general-input"}
                />
              )}
            />
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <CoreButton
            text="Add"
            type="primary"
            htmlType="submit"
            loading={loading}
          />
        </div>
      </form>
    </Modal>
  );
};

export default AddTeamMember;
