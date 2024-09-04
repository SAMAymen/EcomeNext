"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Specification } from "@prisma/client";
import axios from "axios";
import { Button, Modal, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiPencil, HiPlus } from "react-icons/hi";
import type { z } from "zod";
import SpecificationForm from "./SpecificationForm";
import { SpecificationSchema } from "@/app/validation";
import { revalidateSpecifications } from "@/app/actions/actions";

type SpecificationFormSchema = z.infer<typeof SpecificationSchema>;

interface Props {
  id?: string;
}

export const CreateSpecification = ({ id }: Props) => {
  const router = useRouter();
  const [specification, setSpecification] = useState<Specification | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
    watch,
    setValue,
  } = useForm<SpecificationFormSchema>({
    resolver: zodResolver(SpecificationSchema),
  });

  const handleCreateEdit = async () => {
    try {
      setIsSubmitting(true);
      if (id) {
        const response = await axios.get(`/api/admin/specifications/${id}`);
        setSpecification(response.data);
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
    setIsSubmitting(true);
    try {
      const response = specification
        ? await axios.patch(
            `/api/admin/specifications/${specification.id}`,
            data
          )
        : await axios.post("/api/admin/specifications", data);
      if (response.status === 200) {
        reset();
        await revalidateSpecifications();
        router.refresh();
        toast.success(
          `Specification ${specification ? "updated" : "created"} successfully`
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
          {id ? "" : "Add new specification"}
        </span>
      </Button>
      <Modal show={isModalOpen} size="xl" onClose={closeModal}>
        <form onSubmit={onSubmit} className="flex flex-col gap-8">
          <Modal.Header>Specification</Modal.Header>
          <Modal.Body>
            <div className="space-y-2 p-2 overflow-y-auto h-96">
              <SpecificationForm
                specification={specification || undefined}
                errors={errors}
                register={register}
                watch={watch}
                setValue={setValue}
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
                {specification ? "Update" : "Create"}
              </span>
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
