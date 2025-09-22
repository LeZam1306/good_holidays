import type { DataInterface } from "../../types/Data.interface";
import type { RespondInvitationInterface } from "../../types/ResponseInvitation.interface";

export const respondToInvitationFetch = async (
  response: RespondInvitationInterface
): Promise<DataInterface> => {
  const res = await fetch("http://localhost:3000/api/invitation/respond", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(response),
  });
  if (res.status === 500) {
    throw new Error("Error Server");
  }
  return res.json();
};
