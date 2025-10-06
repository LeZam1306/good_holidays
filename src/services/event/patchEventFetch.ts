import type { DataInterface } from "../../types/Data.interface";
import type { PatchEventInterface } from "../../types/PatchEvent.interface";

export const patchEventFetch = async (
  eventData: PatchEventInterface
): Promise<DataInterface> => {
  const { eventId, ...body } = eventData;

  const res = await fetch(`http://localhost:3000/api/event/${eventId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });

  if (res.status === 500) {
    throw new Error("Server Error");
  }

  return res.json();
};
