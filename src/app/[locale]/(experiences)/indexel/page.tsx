import Hero from "@/components/Hero";
import Text from "@/components/Text";
import { useTranslations } from "next-intl";

export default function Indexel() {
  const t = useTranslations("Indexel");

  return (
    <>
      <Hero
        title={t("Hero.title")}
        location={t("Hero.location")}
        subtitle={[
          {
            normal: t("Hero.subtitleOne.normal"),
            bold: t("Hero.subtitleOne.bold"),
          },
          {
            normal: t("Hero.subtitleTwo.normal"),
            bold: t("Hero.subtitleTwo.bold"),
          },
        ]}
      />

      <Text
        title={t("Text.title")}
        items={[
          {
            subtitle: t("Text.itemsOne.subtitle"),
            content: t("Text.itemsOne.content"),
          },
          {
            subtitle: t("Text.itemsTwo.subtitle"),
            content: t("Text.itemsTwo.content"),
          },
          {
            subtitle: t("Text.itemsThree.subtitle"),
            content: t("Text.itemsThree.content"),
          },
          {
            subtitle: t("Text.itemsFour.subtitle"),
            content: t("Text.itemsFour.content"),
          },
        ]}
      />
    </>
  );
}
