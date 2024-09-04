"use client";

import { Specification } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CreateSpecification } from "./CreateSpecification";
import DeleteSpecification from "./DeleteSpecification";

export const columns: ColumnDef<Specification>[] = [
  {
    header: "Title",
    accessorKey: "title",
    cell: ({ row }) => {
      const { title } = row.original;
      return <p className="dark:text-white">{title}</p>;
    },
  },
  {
    header: "description",
    accessorKey: "description",
    cell: ({ row }) => {
      const { description } = row.original;
      // 50 chars max after that write ... and show the full description on hover
      return (
        <p className="dark:text-white">
          {description.length > 50
            ? `${description.slice(0, 50)}...`
            : description}
        </p>
      );
    },
  },
  {
    header: "Created At",
    accessorKey: "createdAt",
    cell: ({ row }) => {
      const { createdAt } = row.original;
      return (
        <p className="dark:text-white">
          {new Date(createdAt).toLocaleString()}
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
          {new Date(updatedAt).toLocaleString()}
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
          <CreateSpecification id={id} />
          <DeleteSpecification id={id} />
        </div>
      );
    },
  },
];
