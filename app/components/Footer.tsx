import React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";

const Footer = () => {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <Image
              src="/images/logo-dark.png"
              alt="Next Lite Online"
              width={100}
              height={100}
              className="mb-2"
            />
            <p>{t("description")}</p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">{t("quickLinks.title")}</h3>
            <ul>
              <li>
                <Link href="/" className="hover:underline">
                  {t("quickLinks.home")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/products/`} className="hover:underline">
                  {t("quickLinks.products")}
                </Link>
              </li>
              {/* <li>
                <Link href={`/${locale}/about`} className="hover:underline">
                  {t("quickLinks.aboutUs")}
                </Link>
              </li> */}
              <li>
                <Link href={`/${locale}/GmContact`} className="hover:underline">
                  {t("quickLinks.contact")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/privacy`} className="hover:underline">
                  {t("quickLinks.privacyPolicy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">{t("contactUs.title")}</h3>
            <p>{t("contactUs.email")}</p>
            <p>{t("contactUs.phone")}</p>
          </div>

          {/* Social Media Links */}
          {/* <div className="w-full md:w-1/4">
            <h3 className="font-semibold mb-2">{t("followUs.title")}</h3>
            <div className="flex gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-2xl hover:text-gray-400" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl hover:text-gray-400" />
              </Link>
            </div>
          </div> */}
        </div>

        {/* Locale Switcher */}
        <div className="mt-8 text-center">
          <LocaleSwitcher />
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
