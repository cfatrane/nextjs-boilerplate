import { useMutation, useQueryClient } from "@tanstack/react-query";

import { MutationConfig } from "@/lib/react-query";

import { createUser } from "../db/create-user";

type UseCreateUserOptions = {
  userId: string;
  mutationConfig?: MutationConfig<typeof createUser>;
};

export const useCreateUser = ({
  userId,
  mutationConfig,
}: UseCreateUserOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: ["users", userId],
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: createUser,
  });
};
