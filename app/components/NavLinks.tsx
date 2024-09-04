"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const NavLinks = () => {
  const t = useTranslations("navbar");
  const locale = useLocale();

  return (
    <div className="flex items-center dark:text-white gap-4 justify-center">
      <Link href={`/${locale}`} passHref>
        {t("home")}
      </Link>
      <Link href={`/${locale}/products`} passHref>
        {t("products")}
      </Link>
      {/* <Link href={`/${locale}/about`} passHref>
        {t("about")}
      </Link> */}
      <Link href={`/${locale}/GmContact`} passHref>
        {t("contact")}
      </Link>
    </div>
  );
};

export default NavLinks;
