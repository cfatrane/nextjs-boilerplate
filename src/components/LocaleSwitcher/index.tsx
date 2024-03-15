import { useLocale, useTranslations } from "next-intl";

import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";
import { SelectContent, SelectItem } from "@/components/ui/select";

import { locales } from "@/i18n/config";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <div>
      <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
        <SelectContent>
          {locales.map((cur) => (
            <SelectItem key={cur} value={cur}>
              {t("locale", { locale: cur })}
            </SelectItem>
          ))}
        </SelectContent>
      </LocaleSwitcherSelect>
    </div>
  );
}
