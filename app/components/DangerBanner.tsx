"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function OfferBanner() {
  const t = useTranslations("offerBanner");
  const [isHidden, setIsHidden] = React.useState(false);

  return (
    <div
      id="banner"
      className={`${
        isHidden ? "hidden" : ""
      } flex justify-between items-center py-2 px-4 w-full bg-yellow-600 border-b border-yellow-700 text-white`}
    >
      <p className="text-sm font-medium">
        🌟 {t("message")}{" "}
        <a className="font-semibold underline hover:text-yellow-300" href="#">
          {t("offerLink")}
        </a>{" "}
        {t("details")}
      </p>
      <button
        data-collapse-toggle="banner"
        onClick={() => setIsHidden(true)}
        type="button"
        className="flex items-center justify-center w-8 h-8 bg-yellow-700 rounded-full text-white hover:bg-yellow-800"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}
