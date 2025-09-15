import { useQuery } from "@tanstack/react-query";
import { getEventsFetch } from "../services/event/getEventsFetch";

export const useGetEvents = () => {
  const { data, isError, isPending, isSuccess } = useQuery({
    queryKey: ["events"],
    queryFn: getEventsFetch,
    staleTime: 1000 * 5,
  });

  return { data, isError, isPending, isSuccess };
};
