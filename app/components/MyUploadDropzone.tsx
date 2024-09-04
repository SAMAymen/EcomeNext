"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { UploadDropzone as UploadDropzoneComponent } from "@/utils/uploadthing"; // Update this import if needed

interface UploadDropzoneProps {
  setValue: (value: string[]) => void;
  fieldName: string;
  className?: string;
}

const MyUploadDropzone: React.FC<UploadDropzoneProps> = ({
  setValue,
  fieldName,
  className,
}) => {
  const [uploading, setUploading] = useState(false);

  return (
    <div className={className}>
      <UploadDropzoneComponent
        className={`
          ut-allowed-content:text-sm 
          ut-allowed-content:dark:text-gray-300 text-gray-600
          ut-button:bg-blue-500 ut-button:hover:bg-blue-600 ut-button:active:bg-blue-700 
          ut-button:disabled:bg-blue-400 ut-button:disabled:cursor-not-allowed 
          ut-button:transition-colors 
          ut-label:text-lg ut-label:font-semibold 
          ut-label:dark:text-gray-200 text-gray-800
          ut-upload-icon:text-blue-500
        `}
        appearance={{
          container: ({ ready, isUploading, isDragActive }) => `
            p-8 flex flex-col items-center justify-center rounded-lg border-2 border-dashed
            ${
              isDragActive
                ? "border-blue-400 dark:bg-gray-700 bg-gray-200"
                : "dark:border-gray-600 dark:bg-gray-800 border-gray-300 bg-gray-100"
            }
            ${isUploading ? "dark:bg-gray-750 bg-gray-150" : ""}
            transition-colors 
            dark:hover:bg-gray-750 hover:bg-gray-150
          `,
          allowedContent: ({ ready, isUploading }) =>
            `mt-2 text-center ${
              ready
                ? "dark:text-gray-300 text-gray-600"
                : isUploading
                ? "text-blue-300"
                : "dark:text-gray-400 text-gray-500"
            }`,
          button: ({ ready, isUploading }) =>
            `mt-4 px-4 py-2 rounded-md font-medium text-white ${
              ready
                ? "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                : isUploading
                ? "bg-blue-400 cursor-not-allowed"
                : "dark:bg-gray-500 bg-gray-400 cursor-not-allowed"
            }`,
        }}
        content={{
          label: ({ ready, isUploading, isDragActive }) =>
            isDragActive
              ? "Drop the file here"
              : ready
              ? "Drag & drop or click to upload images"
              : isUploading
              ? "Uploading..."
              : "Preparing upload...",
          allowedContent: ({ ready, fileTypes, isUploading }) =>
            ready
              ? `Allowed types: ${fileTypes.join(", ")}`
              : isUploading
              ? "Please wait while we process your upload"
              : "Getting ready...",
        }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res && res.length > 0) {
            // Extract URLs from the response
            const uploadedImageUrls = res.map((file) => file.url);
            // Update the form state with the array of URLs
            setValue(uploadedImageUrls);
            toast.success("Images uploaded successfully!");
          }
        }}
        onUploadError={(error: Error) => {
          toast.error(`Upload failed: ${error.message}`);
        }}
      />
    </div>
  );
};

export default MyUploadDropzone;
