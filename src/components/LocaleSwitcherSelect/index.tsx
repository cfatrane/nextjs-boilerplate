"use client";

import { ReactNode, useTransition } from "react";

import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";

import { useRouter, usePathname } from "@/i18n/navigation";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  // const params = useParams();

  // TODO: Fix change language

  function onSelectChange(value: string) {
    const nextLocale = value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>

      {children}
    </Select>
  );
}
