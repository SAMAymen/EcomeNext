"use client";

import { Order } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import DeleteOrder from "./DeleteOrder";
import UpdateOrderStatus from "./UpdateOrderStatus";
import { EditOrder } from "./EditOrder";

export const columns: ColumnDef<Order>[] = [
  {
    header: "Name",
    accessorKey: "customerName",
    cell: ({ row }) => {
      const { customerName } = row.original;
      return <p className="dark:text-white">{customerName}</p>;
    },
  },
  {
    header: "Phone",
    accessorKey: "customerPhone",
    cell: ({ row }) => {
      const { customerPhone } = row.original;
      return <p className="dark:text-white">{customerPhone}</p>;
    },
  },
  {
    header: "Address",
    accessorKey: "shippingAddress",
    cell: ({ row }) => {
      const { shippingAddress } = row.original;
      return <p className="dark:text-white">{shippingAddress}</p>;
    },
  },
  {
    header: "Quantity",
    accessorKey: "quantity",
    cell: ({ row }) => {
      const { quantity } = row.original;
      return <p className="dark:text-white">{quantity}</p>;
    },
  },
  {
    header: "Price",
    accessorKey: "totalPrice",
    cell: ({ row }) => {
      const { totalPrice } = row.original;
      return <p className="dark:text-white">{totalPrice.toFixed(2)} MAD</p>;
    },
  },
  {
    header: "Discount",
    accessorKey: "discount",
    cell: ({ row }) => {
      const { discount } = row.original;
      return <p className="dark:text-white">{discount.toFixed(2)}%</p>;
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const { status } = row.original;
      return <p className="dark:text-white">{status}</p>;
    },
  },
  {
    header: "Status",
    accessorKey: "paymentStatus",
    cell: ({ row }) => {
      const { paymentStatus } = row.original;
      return <p className="dark:text-white">{paymentStatus}</p>;
    },
  },
  {
    header: "Created At",
    accessorKey: "createdAt",
    cell: ({ row }) => {
      const { createdAt } = row.original;
      return (
        <p className="dark:text-white">
          {new Date(createdAt).toLocaleDateString()}
        </p>
      );
    },
  },
  {
    id: "actions",
    size: 10,
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <div className="flex items-center gap-2">
          <UpdateOrderStatus id={id} />
          <DeleteOrder id={id} />
          <EditOrder id={id} />
        </div>
      );
    },
  },
];
