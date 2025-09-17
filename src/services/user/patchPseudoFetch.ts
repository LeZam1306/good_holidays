import type { DataInterface } from "../../types/Data.interface";

export const patchPseudoFetch = async (newPseudo: {
  pseudo: string;
}): Promise<DataInterface<object>> | never => {
  const res = await fetch("http://localhost:3000/api/user/", {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(newPseudo),
    headers: { "Content-Type": "application/json" },
  });
  if (!res.ok) {
    const resError = await res.json();
    throw new Error(resError.message);
  }
  return res.json();
};
