import { useMutation } from "@tanstack/react-query";
import { authFetch } from "../services/event/postEventFetch";
import type { DataInterface } from "../types/Data.interface";
import type { PostEventInterface } from "../types/PostEvent.interface";

export const usePostEvent = () => {
  const { mutate, isPending, isError, data, isSuccess } = useMutation({
    mutationFn: (
      variables: PostEventInterface
    ): Promise<DataInterface> | never => authFetch(variables),
  });

  return { mutate, isPending, isError, data, isSuccess };
};
