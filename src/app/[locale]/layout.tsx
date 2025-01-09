import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import localFont from "next/font/local";
import "../../styles/global.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const degular_medium = localFont({
  src: "../../assets/fonts/Degular-Medium.woff2",
  variable: "--font-degular-medium",
});

const degular_semiBold = localFont({
  src: "../../assets/fonts/Degular-Semibold.woff2",
  variable: "--font-degular-semiBold",
});

const acumin_regular = localFont({
  src: "../../assets/fonts/Acumin-RPro.woff2",
  variable: "--font-acumin-regular",
});

const acumin_bold = localFont({
  src: "../../assets/fonts/Acumin-BdPro.woff2",
  variable: "--font-acumin-bold",
});

export const metadata: Metadata = {
  title: "Julien FRANCOIS",
  description: "Porfolio",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${degular_medium.variable} ${degular_semiBold.variable} ${acumin_regular.variable} ${acumin_bold.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="grain"></div>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
