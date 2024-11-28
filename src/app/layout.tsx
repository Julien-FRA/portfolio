import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/global.scss";
import Header from "@/components/Header";

export const degular_medium = localFont({
  src: "../assets/fonts/Degular-Medium.woff2",
  variable: "--font-degular-medium",
});

export const degular_semiBold = localFont({
  src: "../assets/fonts/Degular-Semibold.woff2",
  variable: "--font-degular-semiBold",
});

export const acumin_regular = localFont({
  src: "../assets/fonts/Acumin-RPro.woff2",
  variable: "--font-acumin-regular",
});

export const acumin_bold = localFont({
  src: "../assets/fonts/Acumin-BdPro.woff2",
  variable: "--font-acumin-bold",
});

export const metadata: Metadata = {
  title: "Julien FRANCOIS",
  description: "Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${degular_medium.variable} ${degular_semiBold.variable} ${acumin_regular.variable} ${acumin_bold.variable}`}
    >
      <body>
        <div className="grain"></div>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
