import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { logoutFetch } from "../services/auth/logoutFetch";
import { useAppStore } from "../stores/useStore";

export const usePostLogout = () => {
  const { reset } = useAppStore();
  const navigate = useNavigate();

  const { data, isError, isPending, mutate } = useMutation({
    mutationFn: logoutFetch,
    onSuccess: () => {
      reset();
      navigate("/login");
    },
  });

  return { data, isError, isPending, mutate };
};
