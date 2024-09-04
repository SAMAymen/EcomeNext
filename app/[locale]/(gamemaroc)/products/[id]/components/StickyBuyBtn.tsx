"use client";

import { Button } from "flowbite-react";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";

const StickyBuyBtn = () => {
  const t = useTranslations("landingPage");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <Button
          href="#orderForm"
          className="fixed bottom-4 left-4 bg-gradient-to-r from-yellow-500 to-yellow-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 z-50"
        >
          {t("heroSection.buyNow")}
        </Button>
      )}
    </div>
  );
};

export default StickyBuyBtn;
