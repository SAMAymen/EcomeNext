"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { Product } from "@prisma/client";
import axios from "axios";
import { Button, Drawer, Modal, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiPencil, HiPlus } from "react-icons/hi";
import type { z } from "zod";
import ProductForm from "./ProductForm";
import { ProductSchema } from "@/app/validation";
import { revalidateProducts } from "@/app/actions/actions";
import { TagIcon } from "@heroicons/react/24/solid";

type ProductFormSchema = z.infer<typeof ProductSchema>;

interface Props {
  id?: string;
}

export const CreateProduct = ({ id }: Props) => {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Set initial state of modal to false

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ProductFormSchema>({
    resolver: zodResolver(ProductSchema),
  });

  const handleCreateEdit = async () => {
    try {
      setIsSubmitting(true);
      if (id) {
        const response = await axios.get(`/api/admin/products/${id}`);
        setProduct(response.data);
      }
    } catch (error) {
      toast.error("Failed to fetch data");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (id) {
      handleCreateEdit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);
    try {
      const response = product
        ? await axios.patch(`/api/admin/products/${product.id}`, data)
        : await axios.post("/api/admin/products", {
            ...data,
          });

      if (response.status === 200 || response.status === 201) {
        reset();
        await revalidateProducts();
        router.refresh();
        toast.success(
          `Product ${product ? "updated" : "created"} successfully`
        );
        setIsOpen(false);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <>
      <Button
        color={id ? "light" : "info"}
        className="font-medium"
        onClick={openDrawer}
      >
        <span className="flex items-center gap-2">
          {id ? <HiPencil /> : <HiPlus />}
          {id ? "" : "Add new product"}
        </span>
      </Button>
      <Drawer open={isOpen} className="w-full md:w-1/2" onClose={closeDrawer}>
        <Drawer.Header title="Product" titleIcon={TagIcon} />
        <form onSubmit={onSubmit}>
          <Drawer.Items>
            <div className="space-y-2 p-2">
              <ProductForm
                product={product || undefined}
                errors={errors}
                register={register}
                watch={watch}
                setValue={setValue}
              />
            </div>
          </Drawer.Items>
          <div className="flex gap-4 justify-end p-2">
            <Button className="font-medium" color="light" onClick={closeDrawer}>
              Cancel
            </Button>
            <Button
              disabled={isSubmitting}
              type="submit"
              className="font-medium"
            >
              <span className="flex items-center gap-2">
                {isSubmitting && <Spinner className="h-4 w-4 animate-spin" />}
                {product ? "Update" : "Create"}
              </span>
            </Button>
          </div>
        </form>
      </Drawer>
    </>
  );
};
