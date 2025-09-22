import type { DataInterface } from "../../types/Data.interface";

export const getInvitationNumber = async ():
  | Promise<DataInterface<{ invitationNumber: number }>>
  | never => {
  const res = await fetch("http://localhost:3000/api/invitation/count", {
    method: "GET",
    credentials: "include",
  });
  if (res.status === 500) {
    throw new Error("Server Error");
  }
  return res.json();
};
