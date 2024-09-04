"use client";

import { Feature } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CreateFeature } from "./CreateFeature";
import DeleteFeature from "./DeleteProduct";

export const columns: ColumnDef<Feature>[] = [
  {
    header: "Content",
    accessorKey: "content",
    cell: ({ row }) => {
      const { content } = row.original;
      return <p className="dark:text-white">{content}</p>;
    },
  },
  {
    header: "Product ID",
    accessorKey: "productId",
    cell: ({ row }) => {
      const { productId } = row.original;
      return <p className="dark:text-white">{productId}</p>;
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
    header: "Updated At",
    accessorKey: "updatedAt",
    cell: ({ row }) => {
      const { updatedAt } = row.original;
      return (
        <p className="dark:text-white">
          {new Date(updatedAt).toLocaleDateString()}
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
          <CreateFeature id={id} />
          <DeleteFeature id={id} />
        </div>
      );
    },
  },
];
