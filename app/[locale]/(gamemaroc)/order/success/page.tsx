import React from "react";
import { Card, Button } from "flowbite-react";
import { HiCheckCircle, HiPhone, HiTruck, HiMail } from "react-icons/hi";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ThankYouPage = () => {
  const t = useTranslations("thankYou");

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <Card className="max-w-2xl w-full dark:bg-gray-800 dark:text-white">
        <div className="text-center">
          <HiCheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500 dark:text-green-400" />
          <h1 className="text-3xl font-bold mb-2">{t("title")}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {t("description")}
          </p>
        </div>

        <div className="space-y-4">
          <Card className="dark:bg-gray-700 dark:text-white">
            <div className="flex items-center gap-4">
              <HiPhone className="mr-3 h-6 w-6 text-primary-500 dark:text-primary-400" />
              <div>
                <h3 className="font-semibold">{t("callSoon.title")}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t("callSoon.description")}
                </p>
              </div>
            </div>
          </Card>

          <Card className="dark:bg-gray-700 dark:text-white">
            <div className="flex items-center gap-4">
              <HiTruck className="mr-3 h-6 w-6 text-primary-500 dark:text-primary-400" />
              <div>
                <h3 className="font-semibold">
                  {t("preparingShipment.title")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t("preparingShipment.description")}
                </p>
              </div>
            </div>
          </Card>

          <Card className="dark:bg-gray-700 dark:text-white">
            <div className="flex items-center gap-4">
              <HiMail className="mr-3 h-6 w-6 text-primary-500 dark:text-primary-400" />
              <div>
                <h3 className="font-semibold">
                  {t("orderConfirmationEmail.title")}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {t("orderConfirmationEmail.description")}
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center mt-6">
          <Link href="/" passHref>
            <Button
              className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-white font-bold py-2 px-4 rounded-lg text-xl hover:opacity-80 transition-opacity w-full"
              gradientDuoTone="cyanToBlue"
              size="lg"
            >
              {t("returnHome")}
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default ThankYouPage;
