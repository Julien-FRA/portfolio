import Block from "@/components/Block";
import Hero from "@/components/Hero";
import List from "@/components/List";
import Stack from "@/components/Stack";
import logoHardisGroup from "../../assets/images/hardisgroup.png";
import logoIndexel from "../../assets/images/indexel-logo.png";
import nextjs from "../../assets/images/nextjs-icon.svg";
import react from "../../assets/images/react.svg";
import typescript from "../../assets/images/typescript-icon.svg";
import nodejs from "../../assets/images/nodejs-icon.svg";
import sass from "../../assets/images/sass.svg";
import tailwind from "../../assets/images/tailwindcss-icon.svg";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  console.log(locale);

  return (
    <>
      <Hero
        location={t("Hero.location")}
        title={t("Hero.title")}
        subtitle={[
          {
            normal: t("Hero.subtitleOne.normal"),
            bold: t("Hero.subtitleOne.bold"),
          },
          {
            normal: t("Hero.subtitleTwo.normal"),
            bold: t("Hero.subtitleTwo.bold"),
          },
          {
            normal: t("Hero.subtitleThree.normal"),
            bold: t("Hero.subtitleThree.bold"),
          },
        ]}
      />
      <Block
        title={t("Block.title")}
        items={[
          {
            src: logoHardisGroup,
            alt: t("Block.itemsOne.alt"),
            subtitle: t("Block.itemsOne.subtitle"),
            caption: t("Block.itemsOne.caption"),
            href: t("Block.itemsOne.href", { locale }),
          },
          {
            src: logoIndexel,
            alt: t("Block.itemsTwo.alt"),
            subtitle: t("Block.itemsTwo.subtitle"),
            caption: t("Block.itemsTwo.caption"),
            href: t("Block.itemsTwo.href", { locale }),
          },
        ]}
      />
      <List
        title={t("List.title")}
        items={[
          {
            subtitle: t("List.itemsOne.subtitle"),
            caption: t("List.itemsOne.caption"),
            content: t("List.itemsOne.content"),
            href: t("List.itemsOne.href"),
          },
          {
            subtitle: t("List.itemsTwo.subtitle"),
            caption: t("List.itemsTwo.caption"),
            content: t("List.itemsTwo.content"),
            href: t("List.itemsTwo.href"),
          },
          {
            subtitle: t("List.itemsThree.subtitle"),
            caption: t("List.itemsThree.caption"),
            content: t("List.itemsThree.content"),
            href: t("List.itemsThree.href"),
          },
        ]}
      />
      <Stack
        title={t("Stack.title")}
        items={[
          {
            src: react,
            alt: t("Stack.itemsOne.alt"),
            techno: t("Stack.itemsOne.techno"),
          },
          {
            src: nextjs,
            alt: t("Stack.itemsTwo.alt"),
            techno: t("Stack.itemsTwo.techno"),
          },
          {
            src: nodejs,
            alt: t("Stack.itemsThree.alt"),
            techno: t("Stack.itemsThree.techno"),
          },
          {
            src: typescript,
            alt: t("Stack.itemsFour.alt"),
            techno: t("Stack.itemsFour.techno"),
          },
          {
            src: sass,
            alt: t("Stack.itemsFive.alt"),
            techno: t("Stack.itemsFive.techno"),
          },
          {
            src: tailwind,
            alt: t("Stack.itemsSix.alt"),
            techno: t("Stack.itemsSix.techno"),
          },
        ]}
      />
    </>
  );
}
