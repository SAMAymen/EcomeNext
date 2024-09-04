"use client";

import ErrorMessage from "@/components/ErrorMessage";
import type { Specification, Product } from "@prisma/client";
import { Label, Select, Textarea, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";
import axios from "axios";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { SpecificationSchema } from "@/app/validation";
import { z } from "zod";
import toast from "react-hot-toast";
import MyUploadDropzone from "@/app/components/MyUploadDropzone";

type SpecificationFormSchema = z.infer<typeof SpecificationSchema>;

interface Props {
  errors: FieldErrors<SpecificationFormSchema>;
  specification?: Partial<SpecificationFormSchema>;
  register: UseFormRegister<SpecificationFormSchema>;
  watch: UseFormWatch<SpecificationFormSchema>;
  setValue: UseFormSetValue<SpecificationFormSchema>;
}

const SpecificationForm: React.FC<Props> = ({
  errors,
  specification,
  register,
  watch,
  setValue,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<
    string | undefined
  >(specification?.productId);

  const mediaUrls = watch("media", specification?.media || []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/admin/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (mediaUrls.length > 0) {
      setValue("media", mediaUrls); // Update form value if mediaUrls changes
    }
  }, [mediaUrls, setValue]);

  const handleImageUpload = (uploadedUrls: string[]) => {
    setValue("media", uploadedUrls);
  };

  return (
    <div className="overflow-y-auto">
      <div className="flex w-full flex-col gap-4">
        {/* English Title */}
        <div className="w-full">
          <Label
            htmlFor="title"
            value="Specification Title (English)"
            className="mb-2 block"
          />
          <TextInput
            id="title"
            type="text"
            defaultValue={specification?.title || undefined}
            {...register("title")}
            placeholder="Specification title"
            shadow
          />
          {errors.title && (
            <ErrorMessage>{String(errors.title?.message)}</ErrorMessage>
          )}
        </div>

        {/* French Title */}
        <div className="w-full">
          <Label
            htmlFor="titleFr"
            value="Specification Title (French)"
            className="mb-2 block"
          />
          <TextInput
            id="titleFr"
            type="text"
            defaultValue={specification?.titleFr || undefined}
            {...register("titleFr")}
            placeholder="Titre de la spécification"
            shadow
          />
          {errors.titleFr && (
            <ErrorMessage>{String(errors.titleFr?.message)}</ErrorMessage>
          )}
        </div>

        {/* Arabic Title */}
        <div className="w-full">
          <Label
            htmlFor="titleAr"
            value="Specification Title (Arabic)"
            className="mb-2 block"
          />
          <TextInput
            id="titleAr"
            type="text"
            defaultValue={specification?.titleAr || undefined}
            {...register("titleAr")}
            placeholder="عنوان المواصفة"
            shadow
          />
          {errors.titleAr && (
            <ErrorMessage>{String(errors.titleAr?.message)}</ErrorMessage>
          )}
        </div>

        {/* English Description */}
        <div className="w-full">
          <Label
            htmlFor="description"
            value="Specification Description (English)"
            className="mb-2 block"
          />
          <Textarea
            id="description"
            defaultValue={specification?.description || undefined}
            {...register("description")}
            placeholder="Specification description"
            shadow
          />
          {errors.description && (
            <ErrorMessage>{String(errors.description?.message)}</ErrorMessage>
          )}
        </div>

        {/* French Description */}
        <div className="w-full">
          <Label
            htmlFor="descriptionFr"
            value="Specification Description (French)"
            className="mb-2 block"
          />
          <Textarea
            id="descriptionFr"
            defaultValue={specification?.descriptionFr || undefined}
            {...register("descriptionFr")}
            placeholder="Description de la spécification"
            shadow
          />
          {errors.descriptionFr && (
            <ErrorMessage>{String(errors.descriptionFr?.message)}</ErrorMessage>
          )}
        </div>

        {/* Arabic Description */}
        <div className="w-full">
          <Label
            htmlFor="descriptionAr"
            value="Specification Description (Arabic)"
            className="mb-2 block"
          />
          <Textarea
            id="descriptionAr"
            defaultValue={specification?.descriptionAr || undefined}
            {...register("descriptionAr")}
            placeholder="وصف المواصفة"
            shadow
          />
          {errors.descriptionAr && (
            <ErrorMessage>{String(errors.descriptionAr?.message)}</ErrorMessage>
          )}
        </div>

        <div>
          {/* Image Preview */}
          {mediaUrls.map((url, index) => (
            <div key={index} className="relative w-24 h-24">
              <Image
                width={500}
                height={500}
                src={url}
                alt={`Media ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Media Upload */}
        <div className="w-full">
          <Label htmlFor="media" value="Media URL" className="mb-2 block" />
          <MyUploadDropzone
            setValue={handleImageUpload}
            fieldName="media"
          />
          {errors.media && (
            <ErrorMessage>{String(errors.media?.message)}</ErrorMessage>
          )}
        </div>

        {/* Product Selector */}
        <div className="w-full">
          <Label
            htmlFor="productId"
            value="Select Product"
            className="mb-2 block"
          />
          <Select
            id="productId"
            value={selectedProductId}
            {...register("productId", {
              value: selectedProductId,
            })}
            onChange={(e) => setSelectedProductId(e.target.value)}
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </Select>
          {errors.productId && (
            <ErrorMessage>{String(errors.productId?.message)}</ErrorMessage>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecificationForm;
