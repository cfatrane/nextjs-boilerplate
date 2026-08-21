"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useCurrentUser } from "../hooks/use-current-user";

export function CurrentUserCard() {
  const currentUser = useCurrentUser();

  if (currentUser.isPending) {
    return <p className="text-muted-foreground text-sm">Loading profile…</p>;
  }

  if (currentUser.isError) {
    return (
      <p className="text-destructive text-sm">
        Your profile is still being synchronized. Try again shortly.
      </p>
    );
  }

  const { email, firstName, lastName, username } = currentUser.data.user;
  const displayName =
    [firstName, lastName].filter(Boolean).join(" ") || username || email;

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{displayName}</CardTitle>
        <CardDescription>
          Loaded with TanStack Query from /api/me.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{email}</p>
      </CardContent>
    </Card>
  );
}
