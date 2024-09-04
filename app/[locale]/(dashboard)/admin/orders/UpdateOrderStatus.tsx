"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Button, Select } from "flowbite-react";
import { revalidateOrders } from "@/app/actions/actions";

type UpdateOrderStatusProps = {
  id: string;
};

const statusOptions = [
  { value: "pending", label: "Pending" },
  { value: "shipped", label: "Shipped" },
  { value: "delivered", label: "Delivered" },
  { value: "canceled", label: "Canceled" },
];

const UpdateOrderStatus = ({ id }: UpdateOrderStatusProps) => {
  const [status, setStatus] = useState("pending");
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      const response = await axios.patch(`/api/admin/orders/${id}`, { status });
      if (response.status === 200) {
        await revalidateOrders();
        toast.success("Order status updated successfully");
      }
    } catch (error) {
      toast.error("Failed to update order status");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Select
        value={status}
        onChange={handleStatusChange}
        className="w-32"
        disabled={isUpdating}
      >
        {statusOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Button onClick={handleUpdate} disabled={isUpdating}>
        {isUpdating ? "Updating..." : "Update"}
      </Button>
    </div>
  );
};

export default UpdateOrderStatus;
