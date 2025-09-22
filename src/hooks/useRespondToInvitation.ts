import { useMutation } from "@tanstack/react-query";
import { respondToInvitationFetch } from "../services/invitation/respondToInvitationFetch";
import type { DataInterface } from "../types/Data.interface";
import type { RespondInvitationInterface } from "../types/ResponseInvitation.interface";

export const useRespondToInvitation = () => {
  const { data, isError, isPending, isSuccess, mutate } = useMutation({
    mutationFn: (
      variables: RespondInvitationInterface
    ): Promise<DataInterface> => respondToInvitationFetch(variables),
  });

  return { data, isError, isPending, isSuccess, mutate };
};
