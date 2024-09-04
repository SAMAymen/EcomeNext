"use client";

import { Badge } from "flowbite-react";
import Image from "next/image";
import { CreateProduct } from "./CreateProduct";
import DeleteProduct from "./DeleteProduct";
import { ColumnDef } from "@tanstack/react-table";
import { Product } from "@prisma/client";

export const columns: ColumnDef<Product>[] = [
  {
    header: "Product",
    accessorKey: "image",
    cell: ({ row }) => {
      const { image, name, nameFr, nameAr } = row.original;
      return (
        <div className="flex items-center gap-2">
          {image && image.length > 0 ? (
            <Image
              src={image[0]}
              alt="Product Image"
              width={50}
              height={50}
              className="w-12 h-12 rounded-full"
            />
          ) : (
            <Image
              src="/images/logo.png"
              alt="No image"
              width={50}
              height={50}
              className="w-12 h-12 rounded-full"
            />
          )}
          <div className="flex flex-col">
            <p className="dark:text-white">{name}</p>
          </div>
        </div>
      );
    },
  },
  {
    header: "Description",
    accessorKey: "description",
    cell: ({ row }) => {
      const { description } = row.original;
      return (
        <div className="flex flex-col">
          <p className="dark:text-white line-clamp-1 truncate">
            {description.substring(0, 100)}
          </p>
        </div>
      );
    },
  },
  {
    header: "Price & Stock",
    accessorKey: "price",
    cell: ({ row }) => {
      const { price, stock } = row.original;
      return (
        <div className="flex items-center gap-2">
          <p className="dark:text-white">${price}</p>
          <Badge color="info" size="sm">
            Stock: {stock}
          </Badge>
        </div>
      );
    },
  },
  {
    header: "Status",
    accessorKey: "active",
    cell: ({ row }) => {
      const { active, featured } = row.original;
      return (
        <div className="flex items-center gap-2">
          <Badge
            color={active ? "success" : "danger"}
            size="sm"
            className="capitalize"
          >
            {active ? "active" : "inactive"}
          </Badge>
          {featured && (
            <Badge color="warning" size="sm">
              Featured
            </Badge>
          )}
        </div>
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
          <CreateProduct id={id} />
          <DeleteProduct id={id} />
        </div>
      );
    },
  },
];
