"use client";

import { Link, usePathname } from "@/i18n/navigation";

export function HeaderItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      className="text-muted-foreground hover:text-foreground data-[active=true]:text-foreground transition-colors"
      data-active={isActive}
      href={href}
    >
      {label}
    </Link>
  );
}

export function HeaderItemMobile({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      className="hover:text-foreground data-[active=false]:text-muted-foreground"
      data-active={isActive}
      href={href}
    >
      {label}
    </Link>
  );
}
