import type { PostInvitationInterface } from "../../types/PostInvitation.interface";

export const postInvitationFetch = async (invited: PostInvitationInterface) => {
  const res = await fetch("http://localhost:3000/api/invitation", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(invited),
  });
  if (res.status === 500) {
    throw new Error("Error Server");
  }
  return res.json();
};
