"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [lang, setLang] = useState('en')

  const handleChange = (e: SelectChangeEvent) => {
    const newLocale = e.target.value;
    setLang(newLocale)

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };
  return (
    <Select className="w-96" name="language" label="Language" value={lang} onChange={handleChange}>
      <MenuItem value="en">Englist</MenuItem>
      <MenuItem value="zh">中文</MenuItem>
    </Select>
  );
}
