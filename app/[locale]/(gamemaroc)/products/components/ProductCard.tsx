import {
  TruckIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { Badge, Button } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Product } from "@prisma/client";

const ProductDetails = ({ product }: { product: Product }) => {
  const t = useTranslations("productCard");
  const locale = useLocale();

  return (
    <div className="pt-6">
      <div className="mb-4 flex items-center justify-between gap-4">
        <Badge color="success" className="px-2.5 py-1.5 text-xs font-semibold">
          {t("discountBadge")}
        </Badge>
      </div>

      <Link
        href={`/${locale}/products/${product.id}`}
        className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
      >
        {locale === "en"
          ? product.name
          : locale === "fr"
          ? product.nameFr
          : product.nameAr}
      </Link>

      <div className="mt-2 flex items-center gap-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              className="h-4 w-4 text-yellow-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
            </svg>
          ))}
        </div>
      </div>

      <ul className="mt-2 flex items-center gap-4">
        <li className="flex items-center gap-2">
          <TruckIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {t("fastDelivery")}
          </p>
        </li>

        <li className="flex items-center gap-2">
          <CurrencyDollarIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {t("bestPrice")}
          </p>
        </li>
      </ul>

      <div className="mt-4 flex items-center justify-between gap-4">
        <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
          {product.price} {t("priceSuffix")}
        </p>

        <Button
          color={"info"}
          className="font-medium"
          as={Link}
          href={`/${locale}/products/${product.id}`}
        >
          <div className="flex items-center gap-2">
            <ShoppingBagIcon className="h-6 w-6" />
            <span className="ml-2">{t("buyNow")}</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

const ProductCard = ({ product }: { product: any }) => {
  const locale = useLocale();

  return (
    // mobile responsive product card import
    <div className="relative max-w-sm overflow-hidden rounded-lg border border-gray-100 bg-white p-4 shadow-md dark:border-gray-800 dark:bg-gray-800 ">
      <Link href={`/${locale}/products/${product.id}`}>
        <Image
          src={product.image[0]}
          alt="Product Image"
          width={200}
          height={200}
          className=" w-full h-auto rounded-lg"
        />
      </Link>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductCard;
