import { useTranslations } from "next-intl";
import React from "react";

export default function ProductTitle() {
  const t = useTranslations("breadcrumb");

  return (
    <div className="my-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {t("products")}
      </h1>
    </div>
  );
}
