"use client";

import { revalidateProducts } from "@/app/actions/actions";
import axios from "axios";
import { Button, Modal } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { HiTrash } from "react-icons/hi";

interface Props {
  id: string;
}

const DeleteProduct = ({ id }: Props) => {
  const [isDeleting, setisDeleting] = useState(false);
  const [isopen, setisOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setisDeleting(true);
    try {
      const response = await axios.delete(`/api/admin/products/${id}`);

      if (response.status === 200) {
        await revalidateProducts();
        router.refresh();
        toast.success("Product deleted successfully");
        setisOpen(false);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setisDeleting(false);
      setisOpen(false);
    }
  };

  return (
    <>
      <Button
        color="failure"
        onClick={() => setisOpen(true)}
        className="font-medium"
      >
        <span className="flex items-center gap-2">
          <HiTrash />
        </span>
      </Button>

      <Modal show={isopen} size="xl" onClose={() => setisOpen(false)}>
        <Modal.Header>
          <h2 className="text-xl font-semibold">Delete Product</h2>
        </Modal.Header>
        <Modal.Body>
          <p className="mt-8">Are you sure you want to delete this Product?</p>
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
            onClick={() => setisOpen(false)}
            className="font-medium"
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteProduct;
