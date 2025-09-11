export const getUserFetch = async () => {
  const res = await fetch("http://localhost:3000/api/user/", {
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) {
    const errorRes = await res.json();
    throw new Error(errorRes.message || "Server Error");
  }
  return res.json();
};
