import React from "react";
import { FaCheckCircle, FaDollarSign, FaHeadset } from "react-icons/fa";
import { useTranslations } from "next-intl";

const WhyChooseUs = () => {
  const t = useTranslations("homepage.whyChooseUs");

  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          {t("title")}
        </h2>
        <p className="text-lg mb-12 text-gray-700 dark:text-gray-300">
          {t("description")}
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Benefit 1 */}
          <div className="w-full md:w-1/4 p-4 flex flex-col items-center text-center">
            <FaCheckCircle className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {t("benefit1Title")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {t("benefit1Description")}
            </p>
          </div>
          {/* Benefit 2 */}
          <div className="w-full md:w-1/4 p-4 flex flex-col items-center text-center">
            <FaDollarSign className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {t("benefit2Title")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {t("benefit2Description")}
            </p>
          </div>
          {/* Benefit 3 */}
          <div className="w-full md:w-1/4 p-4 flex flex-col items-center text-center">
            <FaHeadset className="text-4xl text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {t("benefit3Title")}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {t("benefit3Description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
