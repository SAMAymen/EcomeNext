"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { Feature } from "@prisma/client";
import axios from "axios";
import { Button, Modal, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiPencil, HiPlus } from "react-icons/hi";
import type { z } from "zod";
import FeatureForm from "./FeatureForm";
import { FeatureSchema } from "@/app/validation";
import { revalidateFeatures } from "@/app/actions/actions";

type FeatureFormSchema = z.infer<typeof FeatureSchema>;

interface Props {
  id?: string;
}

export const CreateFeature = ({ id }: Props) => {
  const router = useRouter();
  const [feature, setFeature] = useState<Feature | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Set initial state of modal to false

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<FeatureFormSchema>({
    resolver: zodResolver(FeatureSchema),
  });

  const handleCreateEdit = async () => {
    try {
      setIsSubmitting(true);
      if (id) {
        const response = await axios.get(`/api/admin/features/${id}`);
        setFeature(response.data);
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onSubmit = handleSubmit(async (data) => {
    console.log("Form data:", data);
    setIsSubmitting(true);
    try {
      const response = feature
        ? await axios.patch(`/api/admin/features/${feature.id}`, data)
        : await axios.post("/api/admin/features", {
            ...data,
          });

      if (response.status === 200) {
        reset();
        await revalidateFeatures();
        router.refresh();
        toast.success(
          `Feature ${feature ? "updated" : "created"} successfully`
        );
        setIsModalOpen(false);
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
        onClick={openModal}
      >
        <span className="flex items-center gap-2">
          {id ? <HiPencil /> : <HiPlus />}
          {id ? "" : "Add new feature"}
        </span>
      </Button>

      <Modal show={isModalOpen} size="xl" onClose={closeModal}>
        <form onSubmit={onSubmit} className="flex flex-col gap-8">
          <Modal.Header>Feature</Modal.Header>
          <Modal.Body>
            <div className="space-y-2 p-2 overflow-y-auto h-[100vh - 200px]">
              <FeatureForm
                feature={feature || undefined}
                errors={errors}
                register={register}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="font-medium" color="light" onClick={closeModal}>
              Cancel
            </Button>
            <Button
              disabled={isSubmitting}
              type="submit"
              className="font-medium"
            >
              <span className="flex items-center gap-2">
                {isSubmitting && <Spinner className="h-4 w-4 animate-spin" />}
                {feature ? "Update" : "Create"}
              </span>
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
