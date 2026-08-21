"use client";

import { useQuery } from "@tanstack/react-query";

import { getCurrentUser } from "../api/get-current-user";

export function useCurrentUser() {
  return useQuery({
    queryFn: getCurrentUser,
    queryKey: ["current-user"],
  });
}
