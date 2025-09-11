export const getUSerFetch = async () => {
  const res = await fetch("http://localhost:3000/api/user/");
  if (!res.ok) {
    const errorRes = await res.json();
    throw new Error(errorRes.message || "Server Error");
  }
  return res.json();
};
