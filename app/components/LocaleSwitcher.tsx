"use client";

import { Label, Select } from "flowbite-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React, { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const currentPath = usePathname().slice(3);

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      // Update the URL to include the new locale and current path
      router.replace(`/${nextLocale}${currentPath}`);
    });
  };

  return (
    <Label className="">
      <p className="sr-only">Select Language</p>
      <select
        value={locale}
        onChange={onSelectChange}
        disabled={isPending}
        className="w-32 bg-transparent text-white p-2 rounded-md border border-white"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ar">Arabic</option>
      </select>
    </Label>
  );
}
