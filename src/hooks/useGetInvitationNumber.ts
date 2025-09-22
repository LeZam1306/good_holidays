import { useQuery } from "@tanstack/react-query";
import { getInvitationNumberFetch } from "../services/invitation/getInvitationNumberFetch";

export const useGetInvitationNumber = () => {
  const { data, isError, isPending, isSuccess } = useQuery({
    queryKey: ["invitationNumber"],
    queryFn: getInvitationNumberFetch,
    staleTime: 1000 * 60 * 2,
  });

  return { data, isError, isPending, isSuccess };
};
