// utils/cloudinaryUpload.ts
export async function uploadPdfToCloudinary(file: File): Promise<string> {
  if (file.type !== "application/pdf") {
    throw new Error("Only PDF files are allowed!");
  }
  if (file.size / 1024 / 1024 > 15) {
    throw new Error("PDF must be smaller than 15MB!");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "pdf_upload"); // must be configured in Cloudinary
  formData.append("folder", "uploaded_pdf"); // optional folder in Cloudinary

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/dv5lxcotq/auto/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    throw new Error("Failed to upload PDF");
  }

  const data = await res.json();
  return data.secure_url; // Cloudinary file URL
}
