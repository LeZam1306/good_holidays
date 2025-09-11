import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getUSerFetch } from "../services/getUserFetch";
import { useAppStore } from "../stores/useStore";
import type { DataInterface } from "../types/Data.interface";

export const useUser = () => {
  const { setUserInfos } = useAppStore();
  const { data, error, isError, isPending, refetch } = useQuery<
    DataInterface<{ _id: string; pseudo: string; creationDate: string }>
  >({
    queryFn: getUSerFetch,
    queryKey: ["userInfos"],
    enabled: false,
  });

  useEffect(() => {
    if (data && !data.error && data.data) {
      setUserInfos({
        id: data.data._id,
        pseudo: data.data.pseudo,
        creationDate: data.data.creationDate.toString(),
      });
    }
  }, [data, setUserInfos]);

  return { data, error, isError, isPending, refetch };
};
