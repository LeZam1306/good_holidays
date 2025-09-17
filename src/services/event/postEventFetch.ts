import type { PostEventInterface } from "../../types/PostEvent.interface";

export const authFetch = async (event: PostEventInterface) => {
  const res = await fetch("http://localhost:3000/api/event/", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  });
  if (!res.ok) {
    const errorRes = await res.json();
    throw new Error(errorRes.message || "Server Error");
  }
  return res.json();
};
