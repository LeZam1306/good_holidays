import { useMutation } from "@tanstack/react-query";
import { authFetch } from "../services/auth/authFetch";
import type { CredentialInterface } from "../types/Credential.interface";
import type { DataInterface } from "../types/Data.interface";

export const useAuth = () => {
  const { mutate, data, error, isError, isPending, reset } = useMutation({
    mutationFn: (variables: {
      credential: CredentialInterface;
      authType: "login" | "signup";
    }): Promise<DataInterface> =>
      authFetch(variables.credential, variables.authType),
  });

  return { mutate, data, error, isError, isPending, reset };
};
