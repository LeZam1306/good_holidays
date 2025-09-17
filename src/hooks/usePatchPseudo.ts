import { useMutation } from "@tanstack/react-query";
import { patchPseudoFetch } from "../services/user/patchPseudoFetch";
import type { DataInterface } from "../types/Data.interface";

export const usePatchPseudo = () => {
  const { mutate, isPending, isError, data, isSuccess } = useMutation({
    mutationFn: (variables: {
      pseudo: string;
    }): Promise<DataInterface> | never => patchPseudoFetch(variables),
  });

  return { mutate, isPending, isError, data, isSuccess };
};
