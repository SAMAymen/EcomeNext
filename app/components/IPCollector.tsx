"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const IPCollector = () => {
  const pathname = usePathname();
  // change this link with GOOGLE_SCRIPT_URL from env
  const scriptURL = "https://script.google.com/macros/s/more/exec";

  useEffect(() => {
    const getIPAddress = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();

        // Send IP address and page path to Google Sheets
        const formData = new FormData();
        formData.append("ip", data.ip);
        formData.append("path", pathname);
        formData.append("timestamp", new Date().toISOString());
        formData.append("userAgent", navigator.userAgent);
        formData.append("language", navigator.language);

        await fetch(scriptURL as string, {
          method: "POST",
          body: formData,
        });
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    };

    getIPAddress();
  }, [pathname, scriptURL]);

  return null;
};

export default IPCollector;
