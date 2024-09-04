"use client";

import ErrorMessage from "@/components/ErrorMessage";
import { Label, TextInput, Textarea, ToggleSwitch } from "flowbite-react";
import { useState } from "react";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
  UseFormSetValue,
} from "react-hook-form";
import Image from "next/image";
import { ProductSchema } from "@/app/validation";
import { z } from "zod";
import MyUploadDropzone from "@/app/components/MyUploadDropzone";
import { twMerge } from "tailwind-merge";

type ProductFormSchema = z.infer<typeof ProductSchema>;

interface Props {
  errors: FieldErrors<ProductFormSchema>;
  product?: Partial<ProductFormSchema>;
  register: UseFormRegister<ProductFormSchema>;
  watch: UseFormWatch<ProductFormSchema>;
  setValue: UseFormSetValue<ProductFormSchema>;
}

const ProductForm: React.FC<Props> = ({
  errors,
  product,
  register,
  watch,
  setValue,
}) => {
  const [active, setActive] = useState(product?.active || false);

  const handleImageUpload = (uploadedUrls: string[]) => {
    // Update the image URLs in the form state
    setValue("image", uploadedUrls);
  };

  return (
    <div className="flex w-full flex-col gap-4">
      {/* Images Preview and Upload */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {product?.image?.length &&
          product.image.length > 0 &&
          product.image.map((url, index) => (
            <div
              key={index}
              className="relative w-full h-60 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={url}
                alt={`Product Image ${index + 1}`}
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          ))}
        {watch("image")?.length > 0 &&
          watch("image").map((url, index) => (
            <div
              key={index}
              className="relative w-full h-60 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={url}
                alt={`Product Image ${index + 1}`}
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
          ))}
        {/* take 4 col */}
        <div
          className={twMerge(
            "col-span-1 md:col-span-3",
            (product?.image?.length && product?.image?.length > 0) ||
              watch("image")?.length > 0
              ? "col-span-1 md:col-span-1"
              : "col-span-3 md:col-span-3"
          )}
        >
          <div className="relative w-full h-full rounded-lg shadow-lg overflow-hidden">
            <MyUploadDropzone setValue={handleImageUpload} fieldName="image" />
          </div>
          {errors.image && (
            <ErrorMessage>{String(errors.image?.message)}</ErrorMessage>
          )}
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4 space-y-4 md:space-y-0">
          {/* English Name */}
          <div className="w-full">
            <Label
              htmlFor="name"
              value="Product Name (English)"
              className="mb-2 block"
            />
            <TextInput
              id="name"
              type="text"
              defaultValue={product?.name || ""}
              {...register("name")}
              placeholder="Product Name"
              shadow
            />
            {errors.name && (
              <ErrorMessage>{String(errors.name?.message)}</ErrorMessage>
            )}
          </div>

          {/* French Name */}
          <div className="w-full">
            <Label
              htmlFor="nameFr"
              value="Product Name (French)"
              className="mb-2 block"
            />
            <TextInput
              id="nameFr"
              type="text"
              defaultValue={product?.nameFr || ""}
              {...register("nameFr")}
              placeholder="Nom du produit"
              shadow
            />
            {errors.nameFr && (
              <ErrorMessage>{String(errors.nameFr?.message)}</ErrorMessage>
            )}
          </div>

          {/* Arabic Name */}
          <div className="w-full">
            <Label
              htmlFor="nameAr"
              value="Product Name (Arabic)"
              className="mb-2 block"
            />
            <TextInput
              id="nameAr"
              type="text"
              className="text-right"
              defaultValue={product?.nameAr || ""}
              {...register("nameAr")}
              placeholder="اسم المنتج"
              shadow
            />
            {errors.nameAr && (
              <ErrorMessage>{String(errors.nameAr?.message)}</ErrorMessage>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 space-y-4 md:space-y-0">
          {/* English Description */}
          <div className="w-full">
            <Label
              htmlFor="description"
              value="Product Description (English)"
              className="mb-2 block"
            />
            <Textarea
              id="description"
              rows={6}
              defaultValue={product?.description || ""}
              {...register("description")}
              placeholder="Product Description"
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
              value="Product Description (French)"
              className="mb-2 block"
            />
            <Textarea
              id="descriptionFr"
              rows={6}
              defaultValue={product?.descriptionFr || ""}
              {...register("descriptionFr")}
              placeholder="Description du produit"
              shadow
            />
            {errors.descriptionFr && (
              <ErrorMessage>
                {String(errors.descriptionFr?.message)}
              </ErrorMessage>
            )}
          </div>

          {/* Arabic Description */}
          <div className="w-full">
            <Label
              htmlFor="descriptionAr"
              value="Product Description (Arabic)"
              className="mb-2 block"
            />
            <Textarea
              id="descriptionAr"
              rows={6}
              defaultValue={product?.descriptionAr || ""}
              {...register("descriptionAr")}
              placeholder="وصف المنتج"
              shadow
            />
            {errors.descriptionAr && (
              <ErrorMessage>
                {String(errors.descriptionAr?.message)}
              </ErrorMessage>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <Label htmlFor="price" value="Price" className="mb-2 block" />
            <TextInput
              id="price"
              type="number"
              defaultValue={product?.price || ""}
              {...register("price", { valueAsNumber: true })}
              placeholder="Product Price"
              shadow
            />
            {errors.price && (
              <ErrorMessage>{String(errors.price?.message)}</ErrorMessage>
            )}
          </div>
          <div className="w-1/2">
            <Label htmlFor="stock" value="Stock" className="mb-2 block" />
            <TextInput
              id="stock"
              type="number"
              defaultValue={product?.stock || ""}
              {...register("stock", { valueAsNumber: true })}
              placeholder="Product Stock"
              shadow
            />
            {errors.stock && (
              <ErrorMessage>{String(errors.stock?.message)}</ErrorMessage>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <div>
            <Label htmlFor="featured" value="Featured" className="mb-2 block" />
            <ToggleSwitch
              id="featured"
              checked={watch("featured", product?.featured || false)}
              onChange={(checked: boolean) => setValue("featured", checked)}
            />
            {errors.featured && (
              <ErrorMessage>{String(errors.featured?.message)}</ErrorMessage>
            )}
          </div>
          <div>
            <Label htmlFor="active" value="Active" className="mb-2 block" />
            <ToggleSwitch
              id="active"
              checked={watch("active", product?.active || false)}
              onChange={(checked: boolean) => setValue("active", checked)}
            />
            {errors.active && (
              <ErrorMessage>{String(errors.active?.message)}</ErrorMessage>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;