"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  DarkThemeToggle,
  useThemeMode,
} from "flowbite-react";
import NavLinks from "./NavLinks";
import Image from "next/image";
import { useState, useEffect } from "react";

const GameNavbar = () => {
  const { mode } = useThemeMode();
  const [imageSrc, setImageSrc] = useState("/images/logo.png");

  useEffect(() => {
    setImageSrc(mode === "dark" ? "/images/logo-dark.png" : "/images/logo.png");
  }, [mode]);

  return (
    <Navbar fluid rounded>
      <div className="flex md:order-3 gap-2">
        <DarkThemeToggle />
      </div>
      <NavbarBrand href="/" className="flex items-center gap-2">
        <Image
          src={imageSrc}
          width={80}
          height={80}
          className="rounded-md"
          alt="Next Lite Online"
        />
      </NavbarBrand>
      {/* hide on large screens */}
      <div className="flex md:order-2 gap-2 md:hidden">
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavLinks />
      </NavbarCollapse>
    </Navbar>
  );
};

export default GameNavbar;
