import type { DataInterface } from "../../types/Data.interface";
import type { EventInfoInterface } from "../../types/EventInfo.interface";

export const getEventInfoFetch = async (
  idEvent: string
): Promise<DataInterface<EventInfoInterface>> | never => {
  const res = await fetch(`http://localhost:3000/api/event/${idEvent}`, {
    method: "GET",
    credentials: "include",
  });
  if (!res.status) {
    const errorRes = await res.json();
    throw new Error(errorRes.message || "Server Error");
  }
  return res.json();
};
