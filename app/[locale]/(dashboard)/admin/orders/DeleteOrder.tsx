"use client";

import { revalidateOrders } from "@/app/actions/actions";
import axios from "axios";
import { Button, Modal } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { HiTrash } from "react-icons/hi";

interface Props {
  id: string;
}

const DeleteOrder = ({ id }: Props) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await axios.delete(`/api/admin/orders/${id}`);

      if (response.status === 200) {
        await revalidateOrders();
        router.refresh();
        toast.success("Order deleted successfully");
        setIsOpen(false);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsDeleting(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      <Button
        color="failure"
        onClick={() => setIsOpen(true)}
        className="font-medium"
      >
        <span className="flex items-center gap-2">
          <HiTrash />
        </span>
      </Button>

      <Modal show={isOpen} size="xl" onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <h2 className="text-xl font-semibold">Delete Order</h2>
        </Modal.Header>
        <Modal.Body>
          <p className="mt-8">Are you sure you want to delete this Order?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="failure"
            onClick={handleDelete}
            disabled={isDeleting}
            className="font-medium"
          >
            Delete
          </Button>
          <Button
            color="light"
            onClick={() => setIsOpen(false)}
            className="font-medium"
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteOrder;
