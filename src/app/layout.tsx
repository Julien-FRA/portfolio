import type { Metadata } from "next";

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
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
