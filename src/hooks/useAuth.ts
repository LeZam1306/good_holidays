import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authFetch } from "../services/auth/authFetch";
import type { CredentialInterface } from "../types/Credential.interface";
import type { DataInterface } from "../types/Data.interface";

export const useAuth = () => {
  const navigate = useNavigate();

  const { mutate, data, error, isError, isPending, reset } = useMutation({
    mutationFn: (variables: {
      credential: CredentialInterface;
      authType: "login" | "signup";
    }): Promise<DataInterface> =>
      authFetch(variables.credential, variables.authType),
    onSuccess: (data, variables) => {
      if (variables.authType === "login" && !data.error) {
        navigate("/dashboard");
      }
    },
  });

  return { mutate, data, error, isError, isPending, reset };
};
