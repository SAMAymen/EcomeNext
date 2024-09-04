"use client";

import { PhoneIcon } from "@heroicons/react/24/solid";
import { Button, Spinner, Textarea, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import toast from "react-hot-toast";
import { OrderSchema } from "@/app/validation";
import { useLocale, useTranslations } from "next-intl";
import { ProductWithDetails } from "@/app/types/product";
import ReactPixel from "react-facebook-pixel"; // Import Facebook Pixel

type OrderFormSchema = z.infer<typeof OrderSchema>;

const OrderForm = ({ product }: { product: ProductWithDetails }) => {
  const t = useTranslations("landingPage.orderFormSection");
  const tg = useTranslations("general");
  const locale = useLocale();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue, // To manually set the value
  } = useForm<OrderFormSchema>({
    resolver: zodResolver(OrderSchema),
    defaultValues: {
      paymentMethod: "cash_on_delivery",
    },
  });

  useEffect(() => {
    const discount = calculateDiscount(quantity);
    const discountedPrice = product.price * (1 - discount);
    setTotalPrice(Number((discountedPrice * quantity).toFixed(2)));

    // Update the form value for quantity
    setValue("quantity", quantity);
  }, [quantity, product.price, setValue]);

  const calculateDiscount = (qty: number) => {
    if (qty >= 10) return 0.15; // 15% discount for 10 or more
    if (qty >= 5) return 0.1; // 10% discount for 5-9 items
    if (qty >= 3) return 0.05; //5% discount for 3-4 items
    return 0; // No discount for 1-2 items
  };

  const onSubmit = async (data: OrderFormSchema) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("/api/orders", {
        ...data,
        productId: product.id,
        totalPrice: totalPrice.toString(),
        discount: calculateDiscount(quantity) * 100,
        status: "pending",
      });
      if (response.status === 200) {
        toast.success(t("orderSuccess"));

        // Track Lead event with Facebook Pixel
        ReactPixel.track("Lead", {
          productId: product.id,
          quantity,
          totalPrice: totalPrice.toString(),
        });

        // Redirect to success page
        router.push(`/${locale}/order/success`);
      }
    } catch (error) {
      toast.error(t("orderFailed"));
    }
  };

  return (
    <>
      <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
        <form
          className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-4">
            <label
              htmlFor="customerName"
              className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
            >
              {t("customerName.label")}
            </label>
            <TextInput
              type="text"
              id="customerName"
              {...register("customerName")}
              placeholder={t("customerName.placeholder")}
            />
            {errors.customerName && (
              <p className="text-red-500 text-sm">{t("customerName.error")}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="customerPhone"
              className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
            >
              {t("customerPhone.label")}
            </label>
            <TextInput
              type="tel"
              id="customerPhone"
              icon={PhoneIcon}
              {...register("customerPhone")}
              placeholder={t("customerPhone.placeholder")}
            />
            {errors.customerPhone && (
              <p className="text-red-500 text-sm">{t("customerPhone.error")}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="shippingAddress"
              className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
            >
              {t("shippingAddress.label")}
            </label>
            <Textarea
              id="shippingAddress"
              {...register("shippingAddress")}
              rows={4}
              placeholder={t("shippingAddress.placeholder")}
            ></Textarea>
            {errors.shippingAddress && (
              <p className="text-red-500 text-sm">
                {t("shippingAddress.error")}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="quantity"
              className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
            >
              {t("quantity.label")}
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded dark:bg-gray-700 dark:text-gray-300"
              >
                -
              </button>
              <input
                type="text"
                id="quantity"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="text-center w-12 border rounded px-2 py-1 dark:bg-gray-800 dark:text-gray-300"
              />
              <button
                type="button"
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded dark:bg-gray-700 dark:text-gray-300"
              >
                +
              </button>
            </div>
            {errors.quantity && (
              <p className="text-red-500 text-sm">{t("quantity.error")}</p>
            )}
          </div>

          <Button
            type="submit"
            className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-white font-bold py-2 px-4 rounded-lg text-xl hover:opacity-80 transition-opacity w-full"
            disabled={isSubmitting}
          >
            <span className="flex items-center gap-2">
              {isSubmitting && <Spinner className="h-4 w-4 animate-spin" />}
              {t("placeOrder")}
            </span>
          </Button>
        </form>
        <div className="mt-6 grow sm:mt-8 lg:mt-0">
          <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {t("productPrice")}
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                  {product.price} {tg("priceCurrency")}
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {t("discount")}
                </dt>
                <dd className="text-base font-medium text-green-500">
                  {calculateDiscount(quantity) > 0
                    ? (calculateDiscount(quantity) * 100).toFixed(0)
                    : 0}
                  %
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {t("shipping")}
                </dt>
                <dd className="text-base font-medium text-green-500">
                  {t("freeShipping")}
                </dd>
              </dl>
            </div>
            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-4 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">
                {t("totalPrice")}
              </dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">
                {totalPrice} {tg("priceCurrency")}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderForm;
