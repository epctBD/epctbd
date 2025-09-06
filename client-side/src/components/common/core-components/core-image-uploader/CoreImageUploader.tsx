import React, { useState, useEffect } from "react";
import { Upload, message } from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import ImageUploadIcon from "../../svg/ImageUploadIcon";
import { singleUploadToCloudinary } from "@/utils/cloudinarySingleUpload";

interface CoreImageUploaderProps {
  onImageUpload: (imageUrl: string | null) => void;
  existingImage?: string | "";
}

const CoreImageUploader: React.FC<CoreImageUploaderProps> = ({
  onImageUpload,
  existingImage,
}) => {
  const [image, setImage] = useState<string>("");

  useEffect(() => {
    setImage(existingImage || "");
  }, [existingImage]);

  const handleFileChange = async (file: File) => {
    try {
      const url = await singleUploadToCloudinary(file, "portfolio_images");
      setImage(url);
      onImageUpload(url);
      message.success("Image uploaded successfully!");
    } catch (err: any) {
      message.error(err.message || "Image upload failed!");
    }
  };

  const handleRemoveImage = () => {
    setImage("");
    onImageUpload(null);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
      {!image && (
        <Upload
          beforeUpload={(file) => {
            handleFileChange(file);
            return Upload.LIST_IGNORE;
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
              src={image}
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
