"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the user is on a mobile device
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));
  }, []);

  const whatsappUrl = isMobile
    ? "whatsapp://send?phone=+2120617473075&text=Bonjour%20!%20Je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20produits%20."
    : "https://web.whatsapp.com/send?phone=+2120617473075&text=Bonjour%20!%20Je%20suis%20int%C3%A9ress%C3%A9%20par%20vos%20produits%20.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 p-4 bg-white dark:bg-green-800 
       rounded-full shadow-lg"
    >
      <FaWhatsapp className="text-4xl text-green-500 dark:text-green-100" />
    </a>
  );
}
