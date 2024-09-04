import AuthProvider from "@/context/AuthProvider";
import ToastProvider from "@/context/ToastProvider";
import { Flowbite, ThemeModeScript } from "flowbite-react";
import { Cairo, Nunito } from "next/font/google";
import { twMerge } from "tailwind-merge";
import "@/app/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { flowbiteTheme } from "@/theme";

const nunito = Nunito({ subsets: ["latin"] });
const cairo = Cairo({ subsets: ["arabic"] });

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: RootLayoutProps) {
  return {
    // nextliteonline
    title: locale === "ar" ? "نكست لايت أونلاين" : "Next Lite Online",
    description: locale === "ar" ? "موقع الكتروني" : "Online website",
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  const messages = await getMessages();

  const direction = locale === "ar" ? "rtl" : "ltr";
  const fontClass = locale === "ar" ? cairo.className : nunito.className;

  return (
    <html lang={locale} dir={direction}>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={twMerge(
          "bg-gray-50 dark:bg-gray-900",
          fontClass,
          direction === "rtl" ? "rtl" : "ltr"
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <main className={fontClass}>
            <AuthProvider>
              <ToastProvider />
              <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite>
            </AuthProvider>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
