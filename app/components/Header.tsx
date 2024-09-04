import React from "react";
import Image from "next/image";
import { Carousel } from "flowbite-react";
import GameNavbar from "./GameNavbar";

const Header = () => {
  return (
    <div>
      <GameNavbar />

      {/* Hero Section */}
      <div className="relative h-[calc(70vh-64px)] m-10">
        <Carousel className="carousel-no-rounded">
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            width={1920}
            height={1080}
            alt="Carousel 1"
          />
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            width={1920}
            height={1080}
            alt="Carousel 2"
          />
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            width={1920}
            height={1080}
            alt="Carousel 3"
          />
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            width={1920}
            height={1080}
            alt="Carousel 4"
          />
          <Image
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            width={1920}
            height={1080}
            alt="Carousel 5"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Header;
