import { useMutation } from "@tanstack/react-query";
import { postInvitationFetch } from "../services/invitation/postInvitationFetch";
import type { DataInterface } from "../types/Data.interface";
import type { PostInvitationInterface } from "../types/PostInvitation.interface";

export const usePostInvitation = () => {
  const { data, isError, isPending, mutate } = useMutation({
    mutationFn: (variables: PostInvitationInterface): Promise<DataInterface> =>
      postInvitationFetch(variables),
  });

  return { data, isError, isPending, mutate };
};
