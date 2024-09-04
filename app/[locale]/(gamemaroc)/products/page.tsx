import React from "react";
import ProductCard from "./components/ProductCard";
import db from "@/prisma/client";
import { revalidatePath } from "next/cache";
import BreadcrumbProducts from "./components/BreadcrumbProducts";
import ProductTitle from "./components/ProductTitle";

const page = async () => {
  const products = (await db.product.findMany()) || [];
  revalidatePath("/admin/products");

  return (
    <div className="p-5">
      {/* breadcrumb */}
      <BreadcrumbProducts />
      {/* title */}
      <ProductTitle />
      {/* product card list  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
