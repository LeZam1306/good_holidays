import type { DataInterface } from "../../types/Data.interface";
import type { EventInterface } from "../../types/Event.interface";

export const getEventsFetch = async ():
  | Promise<DataInterface<{ events: EventInterface[] }>>
  | never => {
  const res = await fetch("http://localhost:3000/api/event", {
    method: "GET",
    credentials: "include",
  });
  if (!res.status) {
    const errorRes = await res.json();
    throw new Error(errorRes.message || "Server Error");
  }
  return res.json();
};
