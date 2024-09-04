import React from "react";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          {t("title")}
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          {t("description")}
        </p>
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t("ourStory.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t("ourStory.description")}
          </p>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t("ourMission.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t("ourMission.description")}
          </p>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
            {t("ourValues.title")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {t("ourValues.description")}
          </p>
        </div>
      </div>
    </section>
  );
}
