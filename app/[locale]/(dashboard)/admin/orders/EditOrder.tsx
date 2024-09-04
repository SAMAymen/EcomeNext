"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { Order } from "@prisma/client";
import axios from "axios";
import { Button, Drawer, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiPencil } from "react-icons/hi";
import type { z } from "zod";
import { OrderSchema } from "@/app/validation";
import OrderForm from "./OrderForm";
import { revalidateOrders } from "@/app/actions/actions";
import { CalendarIcon } from "@heroicons/react/24/solid";

type OrderFormSchema = z.infer<typeof OrderSchema>;

export const EditOrder = ({ id }: { id: string }) => {
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<OrderFormSchema>({
    resolver: zodResolver(OrderSchema),
  });

  useEffect(() => {
    if (id) {
      const fetchOrder = async () => {
        try {
          setIsSubmitting(true);
          const response = await axios.get(`/api/admin/orders/${id}`);
          setOrder(response.data);
          // Set form values if editing
          if (response.data) {
            Object.keys(response.data).forEach((key) => {
              setValue(key as keyof OrderFormSchema, response.data[key]);
            });
          }
        } catch (error) {
          toast.error("Failed to fetch data");
        } finally {
          setIsSubmitting(false);
        }
      };

      fetchOrder();
    }
  }, [id, setValue]);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);
    try {
      if (!order) {
        throw new Error("Order not found");
      }

      const response = await axios.patch(`/api/admin/orders/${order.id}`, data);

      if (response.status === 200) {
        toast.success("Order updated successfully");
        await revalidateOrders();
        router.refresh();
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
      <Button color="light" className="font-medium" onClick={openDrawer}>
        <span className="flex items-center gap-2">
          <HiPencil />
        </span>
      </Button>

      <Drawer open={isOpen} onClose={closeDrawer} className="w-full md:w-1/3">
        <Drawer.Header title="Edit Order" titleIcon={CalendarIcon} />
        <form onSubmit={onSubmit} className="flex flex-col gap-8">
          <Drawer.Items>
            <OrderForm
              order={order || undefined}
              errors={errors}
              register={register}
            />
          </Drawer.Items>
          <div className="flex gap-4 justify-end">
            <Button
              disabled={isSubmitting}
              type="submit"
              className="font-medium"
            >
              <span className="flex items-center gap-2">
                {isSubmitting && <Spinner className="h-4 w-4 animate-spin" />}
                Update
              </span>
            </Button>
          </div>
        </form>
      </Drawer>
    </>
  );
};
