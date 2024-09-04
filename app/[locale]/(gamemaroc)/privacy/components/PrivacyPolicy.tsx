import React from "react";
import { useTranslations } from "next-intl";

export default function PrivacyPolicy() {
  const t = useTranslations("privacy.privacyPolicy");
  return (
    <div className="container mx-auto px-4 py-8 dark:text-gray-200">
      <h1 className="text-3xl font-bold">{t("title")}</h1>
      <p className="mt-4">{t("description")}</p>
      <h2 className="text-2xl font-bold mt-8">{t("section1.title")}</h2>
      <p className="mt-4">{t("section1.description")}</p>
      <h2 className="text-2xl font-bold mt-8">{t("section2.title")}</h2>
      <p className="mt-4">{t("section2.description")}</p>
      <h2 className="text-2xl font-bold mt-8">{t("section3.title")}</h2>
      <p className="mt-4">{t("section3.description")}</p>
      <h2 className="text-2xl font-bold mt-8">{t("section4.title")}</h2>
      <p className="mt-4">{t("section4.description")}</p>
      <h2 className="text-2xl font-bold mt-8">{t("section5.title")}</h2>
      <p className="mt-4">{t("section5.description")}</p>
      <h2 className="text-2xl font-bold mt-8">{t("section6.title")}</h2>
      <p className="mt-4">{t("section6.description")}</p>
      <h2 className="text-2xl font-bold mt-8">{t("section7.title")}</h2>
      <p className="mt-4">{t("section7.description")}</p>
      <h2 className="text-2xl font-bold mt-8">{t("section8.title")}</h2>
      <p className="mt-4">{t("section8.description")}</p>
      <h2 className="text-2xl font-bold mt-8">{t("section9.title")}</h2>
      <p className="mt-4">{t("section9.description")}</p>
      <h2 className="text-2xl font-bold mt-8">{t("section10.title")}</h2>
      <p className="mt-4">{t("section10.description")}</p>
    </div>
  );
}
