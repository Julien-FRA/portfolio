"use client";

import { useParams } from "next/navigation";
import { ChangeEvent, ReactNode, useTransition } from "react";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import styles from "./Switcher.module.scss";

type SwitcherProps = {
  children: ReactNode;
  defaultValue: string;
};

export default function Switcher({ children, defaultValue }: SwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <select
      className={styles.switcher}
      defaultValue={defaultValue}
      disabled={isPending}
      onChange={onSelectChange}
    >
      {children}
    </select>
  );
}
