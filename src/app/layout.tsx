import type { Metadata } from "next";
import localFont from "next/font/local";
import "../styles/typography.scss";

export const degular_medium = localFont({
  src: "../fonts/Degular-Medium.woff2",
  variable: "--font-degular-medium",
});

export const degular_semiBold = localFont({
  src: "../fonts/Degular-Semibold.woff2",
  variable: "--font-degular-semiBold",
});

export const acumin_regular = localFont({
  src: "../fonts/Acumin-RPro.woff2",
  variable: "--font-acumin-regular",
});

export const acumin_bold = localFont({
  src: "../fonts/Acumin-BdPro.woff2",
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
      <body>{children}</body>
    </html>
  );
}
