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
    watch,
  } = useForm<ITeamMember>();

  const [imageData, setImageData] = useState<File | null>(null);
  const [imageB64, setImageB64] = useState<string | null>(null);

  useEffect(() => {
    if (currentTeam) {
      reset({
        name: currentTeam.name,
        position: currentTeam.position,
        isExTeam: currentTeam.isExTeam,
        facebook: currentTeam.facebook,
        twitter: currentTeam.twitter,
        linkedin: currentTeam.linkedin,
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
      formData.append("facebook", data.facebook || "");
      formData.append("twitter", data.twitter || "");
      formData.append("linkedin", data.linkedin || "");

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

  const isExMember = watch("isExTeam");

  return (
    <Modal
      key="update team member"
      title="Update Team Member"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
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
              <Input {...field} placeholder="Enter name" />
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
          <CoreImageUploader
            buttonText="Update Image"
            onFileChange={onFileChange}
            onLoadEnd={onLoadEnd}
            imageB64={imageB64 || ""}
          />
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
            text="Update"
            type="primary"
            htmlType="submit"
            loading={loading}
          />
        </div>
      </form>
    </Modal>
  );
};

export default UpdateTeamMember;
