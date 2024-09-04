"use client";

import ErrorMessage from "@/components/ErrorMessage";
import type { Feature, Product } from "@prisma/client";
import { Label, Select, Textarea, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import type { FieldErrors } from "react-hook-form";
import axios from "axios";
import IconSelector from "./IconSelector";

interface Props {
  errors: FieldErrors<Feature>;
  feature?: Feature;
  register: any;
}

const FeatureForm: React.FC<Props> = ({ errors, feature, register }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<
    string | undefined
  >(feature?.productId);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/admin/products"); // Adjust the endpoint as needed
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex w-full flex-col gap-4">
      {/* English Content */}
      <div className="w-full">
        <Label
          htmlFor="content"
          value="Feature Content (English)"
          className="mb-2 block"
        />
        <TextInput
          id="content"
          defaultValue={feature?.content || undefined}
          {...register("content")}
          placeholder="Feature Content"
          shadow
        />
        {errors.content && (
          <ErrorMessage>{String(errors.content?.message)}</ErrorMessage>
        )}
      </div>

      {/* French Content */}
      <div className="w-full">
        <Label
          htmlFor="contentFr"
          value="Feature Content (French)"
          className="mb-2 block"
        />
        <TextInput
          id="contentFr"
          defaultValue={feature?.contentFr || undefined}
          {...register("contentFr")}
          placeholder="Contenu de la fonctionnalité"
          shadow
        />
        {errors.contentFr && (
          <ErrorMessage>{String(errors.contentFr?.message)}</ErrorMessage>
        )}
      </div>

      {/* Arabic Content */}
      <div className="w-full">
        <Label
          htmlFor="contentAr"
          value="Feature Content (Arabic)"
          className="mb-2 block"
        />
        <TextInput
          id="contentAr"
          defaultValue={feature?.contentAr || undefined}
          {...register("contentAr")}
          placeholder="محتوى الميزة"
          shadow
        />
        {errors.contentAr && (
          <ErrorMessage>{String(errors.contentAr?.message)}</ErrorMessage>
        )}
      </div>

      {/* English Content Detail */}
      <div className="w-full">
        <Label
          htmlFor="contentDetail"
          value="Feature Content Detail (English)"
          className="mb-2 block"
        />
        <Textarea
          id="contentDetail"
          defaultValue={feature?.contentDetail || undefined}
          {...register("contentDetail")}
          placeholder="Feature Content Detail"
          shadow
        />
        {errors.contentDetail && (
          <ErrorMessage>{String(errors.contentDetail?.message)}</ErrorMessage>
        )}
      </div>

      {/* French Content Detail */}
      <div className="w-full">
        <Label
          htmlFor="contentDetailFr"
          value="Feature Content Detail (French)"
          className="mb-2 block"
        />
        <Textarea
          id="contentDetailFr"
          defaultValue={feature?.contentDetailFr || undefined}
          {...register("contentDetailFr")}
          placeholder="Détail du contenu de la fonctionnalité"
          shadow
        />
        {errors.contentDetailFr && (
          <ErrorMessage>{String(errors.contentDetailFr?.message)}</ErrorMessage>
        )}
      </div>

      {/* Arabic Content Detail */}
      <div className="w-full">
        <Label
          htmlFor="contentDetailAr"
          value="Feature Content Detail (Arabic)"
          className="mb-2 block"
        />
        <Textarea
          id="contentDetailAr"
          defaultValue={feature?.contentDetailAr || undefined}
          {...register("contentDetailAr")}
          placeholder="تفاصيل محتوى الميزة"
          shadow
        />
        {errors.contentDetailAr && (
          <ErrorMessage>{String(errors.contentDetailAr?.message)}</ErrorMessage>
        )}
      </div>

      {/* Icon Selector */}
      <div className="w-full">
        <IconSelector
          defaultIcon={feature?.icon || ""}
          register={register}
          setSelectedIcon={() => {}}
        />
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
          onChange={(e) => setSelectedProductId(e.target.value)}
          value={selectedProductId} // Set the default value
          {...register("productId", {
            value: selectedProductId, // Register the value explicitly
          })}
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
  );
};

export default FeatureForm;
