export const authFetch = async (
  credential: {
    email: string;
    password: string;
  },
  authType: "signup" | "login"
) => {
  const res = await fetch(`http://localhost:3000/api/auth/${authType}`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credential),
  });
  if (!res.ok) {
    const errorRes = await res.json();
    throw new Error(errorRes.message || "Server Error");
  }
  return res.json();
};
