export async function singleUploadToCloudinary(
  file: File,
  folder = "uploaded_image"
): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "image_upload");
  formData.append("folder", folder);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/dv5lxcotq/auto/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    throw new Error("Cloudinary upload failed");
  }

  const data = await res.json();
  return data.secure_url;
}
