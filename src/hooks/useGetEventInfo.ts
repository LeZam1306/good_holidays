import { useQuery } from "@tanstack/react-query";
import { getEventInfoFetch } from "../services/event/getEventInfoFetch";

export const useGetEventInfo = (eventId: string) => {
  const { data, refetch, isError, isPending } = useQuery({
    queryFn: () => getEventInfoFetch(eventId),
    queryKey: ["eventInfo", eventId],
    staleTime: 1000 * 60 * 5,
    enabled: false,
  });
  const eventInfoData = data;
  return { eventInfoData, refetch, isError, isPending };
};
