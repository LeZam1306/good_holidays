import { useMutation } from "@tanstack/react-query";
import { patchEventFetch } from "../services/event/patchEventFetch";
import type { DataInterface } from "../types/Data.interface";
import type { PatchEventInterface } from "../types/PatchEvent.interface";

export const usePatchEvent = () => {
  const { mutate, isPending, isError, data, isSuccess } = useMutation({
    mutationFn: (variables: PatchEventInterface): Promise<DataInterface> =>
      patchEventFetch(variables),
  });

  return { mutate, isPending, isError, data, isSuccess };
};
