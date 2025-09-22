import type { DataInterface } from "../../types/Data.interface";
import type { InvitationInterface } from "../../types/Invitation.interface";

export const getInvitationFetch = async ():
  | Promise<DataInterface<InvitationInterface>>
  | never => {
  const res = await fetch("http://localhost:3000/api/invitation/pending", {
    method: "GET",
    credentials: "include",
  });
  if (res.status === 500) {
    throw new Error("Server Error");
  }
  return res.json();
};
