import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "flowbite-react";
import Link from "next/link";

const SaleBanner = () => {
  const t = useTranslations("homepage.saleBanner");
  const locale = useLocale();

  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col justify-center items-center rounded-lg w-full shadow-md bg-gradient-to-r from-yellow-500 to-yellow-800 dark:from-yellow-600 dark:to-yellow-900"
          style={{
            height: "auto", // Adjust height to be responsive
            padding: "1rem", // Add padding for better content spacing
          }}
        >
          <div className="text-center text-white dark:text-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {t("title")}
            </h2>
            <p className="mt-2 text-base sm:text-lg md:text-xl">
              {t("description")}
            </p>
            <div className="w-full flex justify-center">
              <Button
                as={Link}
                href={`/${locale}/products`}
                className="mt-4 bg-white text-yellow-800 dark:bg-gray-800 dark:text-yellow-400 font-bold py-2 px-4 rounded-lg text-base sm:text-lg md:text-xl hover:opacity-80 transition-opacity max-w-max"
              >
                {t("shopNow")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleBanner;
