"use client";

import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Button, Carousel } from "flowbite-react";
import { useEffect } from "react";
import { ProductWithDetails } from "@/app/types/product";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Feature } from "@prisma/client";

export default function AnimatedSections({
  product,
}: {
  product: ProductWithDetails;
}) {
  const t = useTranslations("landingPage");
  const locale = useLocale();
  const { scrollY } = useScroll();

  // Transform scrollY value to opacity value
  const opacity = useTransform(scrollY, [0, 200], [0, 1]);

  // Animation controls for text
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  }, [controls]);
  return (
    <>
      {/* Section 1: Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="container mx-auto"
      >
        <section className="py-8 px-4 mx-auto sm:py-16 lg:px-6">
          {/* reverse order in mobile view */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-1/2">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                {locale === "ar"
                  ? product.nameAr
                  : locale === "fr"
                  ? product.nameFr
                  : product.name}
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                {locale === "ar"
                  ? product.descriptionAr
                  : locale === "fr"
                  ? product.descriptionFr
                  : product.description}
              </p>
              <Button
                href="#orderForm"
                className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-white font-bold py-2 px-4 rounded-lg text-xl hover:opacity-80 transition-opacity w-full"
              >
                {t("heroSection.buyNow")}
              </Button>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <div className="w-96" dir="ltr">
                <Carousel>
                  {product.image.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full h-96 flex items-center justify-center"
                    >
                      <Image
                        src={image}
                        alt={image}
                        height={384}
                        width={384}
                        className="bg-white object-contain"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Section 2: Product Features and Benefits */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="container mx-auto"
      >
        <section className="py-8 px-4 mx-auto sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {t("featuresSection.title")}
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              {t("featuresSection.description")}
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {product.features.map((feature: Feature) => (
              <div key={feature.id}>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <CheckIcon className="h-8 w-8 text-primary-500 lg:h-10 lg:w-10 dark:text-primary-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  {locale === "ar"
                    ? feature.contentAr
                    : locale === "fr"
                    ? feature.contentFr
                    : feature.content}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {locale === "ar"
                    ? feature.contentDetailAr
                    : locale === "fr"
                    ? feature.contentDetailFr
                    : feature.contentDetail}
                </p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </>
  );
}
