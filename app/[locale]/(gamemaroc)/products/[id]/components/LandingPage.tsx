import React from "react";
import Image from "next/image";
import { Specification } from "@prisma/client";
import { ProductWithDetails } from "@/app/types/product";
import {
  ClockIcon,
  ShoppingBagIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import { useLocale, useTranslations } from "next-intl";
import OrderForm from "./OrderForm";
import { Avatar } from "flowbite-react";
import AnimatedSections from "./AnimatedSections";
import StickyBuyBtn from "./StickyBuyBtn";

const LandingPage = ({ product }: { product: ProductWithDetails }) => {
  const t = useTranslations("landingPage");
  const locale = useLocale();

  return (
    <div className="container mx-auto">
      <AnimatedSections product={product} />

      {/* Section 5: Order Process */}
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {t("orderProcessSection.title")}
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              {t("orderProcessSection.description")}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12">
            <div className="flex items-center flex-col w-full max-w-xs mx-auto">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 mb-4">
                <ShoppingBagIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-center">
                  {t("orderProcessSection.selectProduct.title")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  {t("orderProcessSection.selectProduct.description")}
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col w-full max-w-xs mx-auto">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 mb-4">
                <ClockIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-center">
                  {t("orderProcessSection.placeOrder.title")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  {t("orderProcessSection.placeOrder.description")}
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col w-full max-w-xs mx-auto">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 mb-4">
                <TruckIcon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-center">
                  {t("orderProcessSection.fastShipping.title")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  {t("orderProcessSection.fastShipping.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Order Form */}
      {/* <section className="my-12 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          {t("orderFormSection.title")}
        </h2>
        <OrderForm product={product} />
      </section> */}
      <section className="" id="orderForm">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">
              {t("orderFormSection.title")}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
              {t("orderFormSection.packagingNote")}
            </p>
          </div>
          <OrderForm product={product} />
        </div>
      </section>

      {/* Section 3: Product Specifications */}
      <section className="">
        <div className="py-8 px-4 mx-auto sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {t("specificationsSection.title")}
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              {t("specificationsSection.description")}
            </p>
          </div>
          <section className="">
            {product.specifications.map(
              (specification: Specification, index: number) => (
                <div
                  key={specification.id}
                  className={`gap-16 items-center mx-auto ${
                    index % 2 === 0 ? "lg:flex" : "lg:flex lg:flex-row-reverse"
                  }`}
                >
                  <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 w-full lg:w-1/2">
                    <h4 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                      {locale === "ar"
                        ? specification.titleAr
                        : locale === "fr"
                        ? specification.titleFr
                        : specification.title}
                    </h4>
                    <p className="mb-4">
                      {locale === "ar"
                        ? specification.descriptionAr
                        : locale === "fr"
                        ? specification.descriptionFr
                        : specification.description}
                    </p>
                  </div>
                  <div className="flex justify-center mt-8 lg:mt-0 w-full lg:w-1/2">
                    <Image
                      className="w-full max-w-sm rounded-lg mb-4"
                      width={400}
                      height={400}
                      src={
                        specification.media[0] ||
                        "https://via.placeholder.com/400"
                      }
                      alt="office content 1"
                    />
                  </div>
                </div>
              )
            )}
          </section>
        </div>
      </section>

      {/* Section 4: Social Proof */}
      {/* <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {t("reviewsSection.title")}
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              {t("reviewsSection.description")}
            </p>
          </div>
        </div>
      </section> */}

      {/* Sticky Buy Now Button */}
      <StickyBuyBtn />
    </div>
  );
};

export default LandingPage;
