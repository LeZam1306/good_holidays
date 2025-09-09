export const authFetch = async (
  credential: {
    email: string;
    password: string;
  },
  authType: "signup" | "login"
) => {
  const res = await fetch(`http://localhost:3000/api/auth/${authType}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credential),
  });
  return res.json();
};
