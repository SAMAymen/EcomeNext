import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const categories = [
  {
    name: "Consoles",
    image: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
    link: "/category/consoles",
  },
  {
    name: "Games",
    image: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
    link: "/category/games",
  },
  {
    name: "Accessories",
    image: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
    link: "/category/accessories",
  },
];

const ShopByCategory = () => {
  const t = useTranslations("homepage.shopByCategory");

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">{t("title")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="relative group">
              <Link href={category.link}>
                <div className="w-full h-0 pb-[75%] relative">
                  <Image
                    src={category.image}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                  <h3 className="text-white text-xl font-semibold">
                    {category.name}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
