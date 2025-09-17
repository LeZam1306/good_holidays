import type { DataInterface } from "../../types/Data.interface";

export const getUserFetch = async ():
  | Promise<DataInterface<object>>
  | never => {
  const res = await fetch("http://localhost:3000/api/user/", {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) {
    const errorRes = await res.json();
    throw new Error(errorRes.message);
  }
  return res.json();
};
