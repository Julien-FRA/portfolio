import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../../styles/global.scss";
import BaseLayout from "@/components/BaseLayout";
import { setRequestLocale } from "next-intl/server";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocalLayout({ children, params }: Props) {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  if (!routing.locales.includes((await params).locale as any)) {
    notFound();
  }

  setRequestLocale((await params).locale);

  return <BaseLayout locale={(await params).locale}>{children}</BaseLayout>;
}
