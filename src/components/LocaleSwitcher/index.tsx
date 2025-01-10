import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import Switcher from "../Switcher/index";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <Switcher defaultValue={locale}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </Switcher>
  );
}
