import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getInvitationNumberFetch } from "../services/invitation/getInvitationNumberFetch";

export const useGetInvitationNumber = () => {
  const [active, setActive] = useState(false);

  const handleActiveFetching = (active: boolean) => {
    setActive(active);
  };

  const { data, isError, isPending, isSuccess } = useQuery({
    queryKey: ["invitationNumber"],
    queryFn: getInvitationNumberFetch,
    staleTime: 1000 * 60 * 2,
    enabled: active,
  });

  return { data, isError, isPending, isSuccess, handleActiveFetching, active };
};
