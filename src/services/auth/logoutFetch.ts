export const logoutFetch = async () => {
  const res = await fetch("http://localhost:3000/api/auth/logout", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  if (res.status === 500) {
    throw new Error("Error Server, please try again later");
  }
  return res;
};
