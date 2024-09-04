"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useThemeMode } from 'flowbite-react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const { mode } = useThemeMode();
    const [imageSrc, setImageSrc] = useState("/images/logo.png");

    useEffect(() => {
      setImageSrc(
        mode === "dark" ? "/images/logo-dark.png" : "/images/logo.png"
      );
    }, [mode]);
  return (
    <div className="flex h-screen w-full">
      <div className="flex h-full w-full flex-col justify-between p-6">
        <Image
          src={imageSrc}
          alt="Next Lite Online"
          width={100}
          height={100}
          className="rounded-md"
        />
        <div className="flex justify-center align-middle">{children}</div>
        <p className="text-sm text-gray-500">&copy; 2024 Next Lite Online</p>
      </div>
      <div
        className="hidden h-full w-full md:flex"
        style={{
          backgroundImage: 'url("/images/frame.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}
