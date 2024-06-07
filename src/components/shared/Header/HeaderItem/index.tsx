"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderItem({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      className="text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground"
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
