import { ChildrenProps } from "@/types/Props";
import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "../styles/global.scss";
import Header from "@/components/organisms/Header";

export const tomorrow = Tomorrow({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-tomorrow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Julien FRANCOIS",
  description: "Portfolio nextjs app.",
  keywords: "portfolio, next, react, typescript, css, scss",
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body className={`${tomorrow.className}`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
