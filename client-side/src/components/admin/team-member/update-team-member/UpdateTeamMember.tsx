import React, { useState, useEffect } from "react";
import { Modal, Input, Radio, message } from "antd";
import { Controller, useForm } from "react-hook-form";
import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import CoreImageUploader from "@/components/common/core-components/core-image-uploader/CoreImageUploader";
import { ITeamMember, ITeamMemberList } from "@/models/teamMember.model";
import { updateTeamMember } from "@/services/teamMember.service";

interface IUpdateTeamMemberModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  currentTeam: ITeamMemberList | null;
  setTeamMembers: React.Dispatch<React.SetStateAction<ITeamMemberList[]>>;
}

const UpdateTeamMember = ({
  isModalOpen,
  setIsModalOpen,
  setTeamMembers,
  currentTeam,
}: IUpdateTeamMemberModalProps) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ITeamMember>();

  const [imageData, setImageData] = useState<File | null>(null);
  const [imageB64, setImageB64] = useState<string | null>(null);

  useEffect(() => {
    if (currentTeam) {
      reset({
        name: currentTeam.name,
        position: currentTeam.position,
        isExTeam: currentTeam.isExTeam,
      });
      setImageB64(currentTeam.display_picture || null);
    }
  }, [currentTeam, reset]);

  const onFileChange = (file: File | null) => {
    setImageData(file);
  };

  const onLoadEnd = (image: string) => {
    setImageB64(image);
  };

  const onSubmit = async (data: ITeamMember) => {
    if (!currentTeam) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("position", data.position);
      formData.append("isExTeam", data.isExTeam ? "true" : "false");

      if (imageData) {
        formData.append("display_picture", imageData);
      } else {
        formData.append("existing_image_link", currentTeam.display_picture);
      }
      const response = await updateTeamMember(currentTeam._id, formData);

      setTeamMembers(response);

      message.success("Team member updated successfully!");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating team member:", error);
      message.error("Failed to update team member. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      key="update team member"
      title="Update Team Member"
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
            buttonText="Update Image"
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
          text="Update Team Member"
          type="primary"
          htmlType="submit"
          loading={loading}
        />
      </form>
    </Modal>
  );
};

export default UpdateTeamMember;
