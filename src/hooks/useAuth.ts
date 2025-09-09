import { useMutation } from "@tanstack/react-query";
import { authFetch } from "../services/auth/authFetch";
import type { credentialInterface } from "../types/credential.interface";

export const useAuth = () => {
  const { mutate, data, error, isPending, reset } = useMutation({
    mutationFn: (variables: {
      credential: credentialInterface;
      authType: "login" | "signup";
    }) => authFetch(variables.credential, variables.authType),
    onSuccess: (response) => {
      console.log(response);
    },
  });

  return { mutate, data, error, isPending, reset };
};
