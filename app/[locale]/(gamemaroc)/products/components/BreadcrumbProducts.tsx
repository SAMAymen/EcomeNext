import React from "react";
import { HiHome } from "react-icons/hi";
import { Breadcrumb } from "flowbite-react";
import { useLocale, useTranslations } from "next-intl";

export default function BreadcrumbProducts() {
  const locale = useLocale();
  const t = useTranslations("breadcrumb");
  return (
    <section>
      <div className="my-3">
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href={`/${locale}`} icon={HiHome}>
            {t("home")}
          </Breadcrumb.Item>
          <Breadcrumb.Item href={`/${locale}/products`}>
            {t("products")}
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </section>
  );
}
