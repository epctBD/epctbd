import CoreButton from "@/components/common/core-components/core-button/CoreButton";
import CoreImageUploader from "@/components/common/core-components/core-image-uploader/CoreImageUploader";
import { IAddBlog, IBlog } from "@/models/blog.model";
import { updateBlog } from "@/services/blog.service";
import { Input, message, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import TextEditor from "../add-blogs/TextEditor";

interface IUpdateBlogModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  blog: IBlog | null;
  setBlogs: React.Dispatch<React.SetStateAction<IBlog[]>>;
}

const UpdateBlog = ({
  isModalOpen,
  setIsModalOpen,
  blog,
  setBlogs,
}: IUpdateBlogModalProps) => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IAddBlog>();

  const [imageData, setImageData] = useState<File | null>(null);
  const [existingImage] = useState<string | null>(blog?.thumbnail || null);
  const [textEditorValue, setTextEditorValue] = useState("");

  useEffect(() => {
    if (blog) {
      setValue("title", blog?.title);
      setValue("content", blog?.content);
      setValue("author", blog?.author);
      setValue("tag", blog?.tag);
      setValue("tag", blog?.tag);
      setTextEditorValue(blog?.content);
    }
  }, [blog, setValue]);

  const handleImageUpload = (image: string | File | null) => {
    setImageData(image as File);
  };

  const onSubmit = async (data: IAddBlog) => {
    if (!blog) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("author", data.author);
      formData.append("tag", data.tag);

      if (imageData) {
        formData.append("thumbnail", imageData);
      } else {
        formData.append("thumbnail", blog.thumbnail);
      }

      const response = await updateBlog(blog.slug, formData);
      setBlogs(response);

      message.success("Blog updated successfully!");
      reset();
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating blog:", error);
      message.error("Failed to update blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      key="update blog"
      title="Update Blog"
      open={isModalOpen}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Title</label>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter blog title"
                className={"general-input"}
              />
            )}
          />
          {errors.title && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.title.message}
            </p>
          )}
        </div>

        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Content</label>
          <TextEditor
            textEditorValue={textEditorValue}
            setTextEditorValue={setTextEditorValue}
          />
          {errors.content && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.content.message}
            </p>
          )}
        </div>

        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Tag</label>
          <Controller
            name="tag"
            control={control}
            rules={{ required: "Tag is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter blog tag"
                className={"general-input"}
              />
            )}
          />
          {errors.tag && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.tag.message}
            </p>
          )}
        </div>

        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Author</label>
          <Controller
            name="author"
            control={control}
            rules={{ required: "Author name is required" }}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Enter author name"
                className={"general-input"}
              />
            )}
          />
          {errors.author && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {errors.author.message}
            </p>
          )}
        </div>

        <div className={"general-input-wrapper"}>
          <label className={"general-label"}>Cover Image</label>
          <CoreImageUploader
            onImageUpload={handleImageUpload}
            existingImage={existingImage || ""}
          />
        </div>

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

export default UpdateBlog;
