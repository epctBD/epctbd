import React, { useState, useEffect } from "react";
import { Upload } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import ImageUploadIcon from "../../svg/ImageUploadIcon";

interface CoreImageUploaderProps {
  onImageUpload: (image: File | null) => void;
  existingImage?: string | "";
}

const CoreImageUploader: React.FC<CoreImageUploaderProps> = ({
  onImageUpload,
  existingImage,
}) => {
  const [image, setImage] = useState<File | string>("");

  useEffect(() => {
    setImage(existingImage || "");
  }, [existingImage]);

  useEffect(() => {
    if (!existingImage) setImage("");
  }, [existingImage]);

  const handleFileChange = (file: File) => {
    setImage(file);
    onImageUpload(file);
  };

  const handleRemoveImage = () => {
    setImage("");
    onImageUpload(null);
  };

  const getImageSrc = () => {
    // If the image is a string (base64 or URL), use it directly
    if (typeof image === "string") {
      return image;
    }
    // If the image is a File, create a temporary URL for it
    if (image instanceof File) {
      return URL.createObjectURL(image);
    }
    return "";
  };

  return (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      {!image && (
        <Upload
          beforeUpload={(file) => {
            handleFileChange(file);
            return false;
          }}
          showUploadList={false}
          accept="image/*"
        >
          <div style={{ padding: "8px" }}>
            <ImageUploadIcon />
          </div>
        </Upload>
      )}

      {image && (
        <div
          style={{ display: "flex", alignItems: "center", marginLeft: "16px" }}
        >
          <div
            className="photo-upload-wrapper"
            style={{ position: "relative" }}
          >
            <Image
              src={getImageSrc()} // Use the helper function to get the correct src
              alt="Uploaded Photo"
              width={76}
              height={76}
              style={{
                borderRadius: "8px",
                objectFit: "cover",
                border: "1px solid #d9d9d9",
              }}
            />
            <div
              onClick={handleRemoveImage}
              className="photo-delete-icon"
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                cursor: "pointer",
                color: "#ff4d4f",
                background: "#fff",
                borderRadius: "50%",
                border: "1px solid #d9d9d9",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <MinusCircleOutlined />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoreImageUploader;
