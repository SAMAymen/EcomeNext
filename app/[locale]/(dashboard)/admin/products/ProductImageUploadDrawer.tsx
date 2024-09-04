"use client";

import FileUpload from "@/app/components/FileUpload";
import { Button } from "flowbite-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiPencil, HiPlus } from "react-icons/hi";
import { HiPhoto } from "react-icons/hi2";

interface ProductImageUploadDrawerProps {
  register: any;
  ProductImg: string | undefined;
}

const ProductImageUploadDrawer: React.FC<ProductImageUploadDrawerProps> = ({
  register,
  ProductImg,
}) => {
  const [preview, setPreview] = useState<string | undefined>(ProductImg);

  useEffect(() => {
    setPreview(ProductImg);
  }, [ProductImg]);

  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((prev) => !prev);

  const handleFileChange = (url?: string) => {
    if (url) {
      setPreview(url);
      setIsEditing(false);
    }
  };

  return (
    <div className="rounded-md border bg-gray-50 p-4">
      <div className="flex items-center justify-between text-sm font-medium text-black">
        <span>Product Image</span>
        <Button onClick={toggleEdit} color={"light"}>
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              {preview ? (
                <>
                  <HiPencil className="mr-2 h-4 w-4" />
                  Edit image
                </>
              ) : (
                <>
                  <HiPlus className="mr-2 h-4 w-4" />
                  Add an image
                </>
              )}
            </>
          )}
        </Button>
      </div>
      <div className="mt-2">
        {!isEditing ? (
          preview ? (
            <div className="relative aspect-video">
              <Image
                width={16}
                height={9}
                alt="upload"
                className="rounded-md object-cover"
                src={preview}
              />
            </div>
          ) : (
            <div className="flex h-60 items-center justify-center rounded-md bg-gray-100">
              <HiPhoto className="h-10 w-10 text-gray-400" />
            </div>
          )
        ) : (
          <div className="mt-2">
            <FileUpload endpoint="upload" onChange={handleFileChange} />
            <div className="mt-2 text-xs text-gray-500">
              16:9 aspect ratio recommended
            </div>
          </div>
        )}
        {preview && (
          <input type="text" {...register("image")} value={preview} />
        )}
      </div>
    </div>
  );
};

export default ProductImageUploadDrawer;
