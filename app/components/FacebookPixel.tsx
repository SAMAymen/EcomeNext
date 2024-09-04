"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ReactPixel from "react-facebook-pixel";

interface FacebookPixelProps {
  pixelId: string;
}

const FacebookPixel: React.FC<FacebookPixelProps> = ({ pixelId }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Facebook Pixel
    ReactPixel.init(pixelId);
    ReactPixel.pageView(); // Track initial page view

    // Track page views on route change
    ReactPixel.pageView();
  }, [pixelId, pathname, searchParams]);

  return null; // This component doesn't render anything
};

export default FacebookPixel;
