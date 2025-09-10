import { useState, type FormEvent } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { useAuth } from "../../hooks/useAuth";
import { credentialSchema } from "../../schemas/credential.schema";
import type { CredentialInterface } from "../../types/Credential.interface";
import Button from "./Button";

const LoginForm = () => {
  const { mutate, data, isError, isPending } = useAuth();
  const [inputs, setInputs] = useState<CredentialInterface>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = credentialSchema.safeParse(inputs);
    if (result.success) mutate({ credential: result.data, authType: "login" });
  };

  return (
    <form
      onSubmit={handleLogin}
      className="mx-2 flex flex-col items-stretch gap-4"
    >
      {isError && (
        <p className="w-full rounded-full border-2 border-red-800 bg-red-950 px-4 py-3 text-center text-lg font-semibold text-white">
          {data?.error ? data.message : "Server error, try again later"}
        </p>
      )}
      <input
        name="email"
        type="email"
        placeholder="myemail@mail.com"
        className="w-full rounded-full bg-gray-900 px-4 py-3 text-lg text-white"
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full rounded-full bg-gray-900 px-4 py-3 text-lg text-white"
        onChange={handleChange}
      />
      <Button type="submit">
        {isPending ? (
          <OrbitProgress
            dense
            color="#ffffff"
            textColor="#ffffff"
            style={{ fontSize: "5px" }}
          />
        ) : (
          "Login"
        )}
      </Button>
      <button className="text-sm text-white underline" type="button">
        You forgot your password ? no problemo !
      </button>
    </form>
  );
};

export default LoginForm;
