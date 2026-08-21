import type { CurrentUser } from "@/app/api/me/handler";

type CurrentUserResponse = {
  user: CurrentUser;
};

export async function getCurrentUser() {
  const response = await fetch("/api/me", {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("Unable to load the current user");
  }

  return (await response.json()) as CurrentUserResponse;
}
