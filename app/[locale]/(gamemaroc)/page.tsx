import React from "react";
import FeaturedProduct from "./components/homepage/FeaturedProduct";
import WhyChooseUs from "./components/homepage/WhyChooseUs";
import SaleBanner from "./components/homepage/SaleBanner";
import db from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Lite Online",
  description: "Next Lite Online",
};

const page = async () => {
  const fproduct = await db.product.findFirst({
    where: { featured: true },
    include: {
      features: true,
    },
  });

  revalidatePath(`/`);

  if (!fproduct) {
    return <div>Product not found</div>;
  }
  return (
    <div className="bg-white dark:bg-gray-900">
      <FeaturedProduct product={fproduct} />
      {/* <ShopByCategory /> */}

      <WhyChooseUs />
      <SaleBanner />
    </div>
  );
};

export default page;
