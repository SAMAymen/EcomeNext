import React from "react";
import Image from "next/image";
import { Button, Carousel } from "flowbite-react";
import { useLocale, useTranslations } from "next-intl";
import { Feature } from "@prisma/client";
import Link from "next/link";
import { ProductSchema } from "@/app/validation";
import { z } from "zod";

type productSch = z.infer<typeof ProductSchema>;

// add id and features to productSchema
export interface productSchema extends productSch {
  id: string;
  features: Feature[];
}

const FeaturedProduct = ({ product }: { product: productSchema }) => {
  const t = useTranslations("homepage.featuredProduct");
  const tg = useTranslations("general");
  const locale = useLocale();

  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          {t("title")}
        </h2>
        {/* reverse order in mobile view */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
          {/* Product Details */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              {locale === "en"
                ? product.name
                : locale === "fr"
                ? product.nameFr
                : product.nameAr}
            </h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              {locale === "en"
                ? product.description
                : locale === "fr"
                ? product.descriptionFr
                : product.descriptionAr}
            </p>
            <p className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              {product.price} {tg("priceCurrency")}
            </p>
            <Button
              as={Link}
              href={`/${locale}/products/${product.id}`}
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-white font-bold py-2 px-4 rounded-lg text-xl hover:opacity-80 transition-opacity"
            >
              {t("viewDetailsButton")}
            </Button>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {t("keyFeaturesTitle")}
              </h3>
              <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                {product.features.map((feature: Feature) =>
                  locale === "en" ? (
                    <li key={feature.id}>{feature.content}</li>
                  ) : locale === "fr" ? (
                    <li key={feature.id}>{feature.contentFr}</li>
                  ) : (
                    <li key={feature.id}>{feature.contentAr}</li>
                  )
                )}
              </ul>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className="h-4 w-4 text-yellow-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                    </svg>
                  ))}
                </div>
                <p className="ml-2 text-gray-700 dark:text-gray-300">
                  {t("reviewsRating")}
                </p>
              </div>
            </div>
          </div>
          {/* Product Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative w-96 h-96" dir="ltr">
              <Carousel>
                {product.image.map((image, index) => (
                  <div key={index} className="relative w-full h-96">
                    <Image
                      src={image}
                      alt={image}
                      layout="fill"
                      className="bg-white"
                      objectFit="cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
