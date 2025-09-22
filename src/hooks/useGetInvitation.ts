import { useQuery } from "@tanstack/react-query";
import { getInvitationFetch } from "../services/invitation/getInvitationFetch";

export const useGetInvitation = () => {
  const { data, isError, isPending, isSuccess } = useQuery({
    queryKey: ["invitations"],
    queryFn: getInvitationFetch,
    staleTime: 1000 * 60 * 5,
  });

  return { data, isError, isPending, isSuccess };
};
