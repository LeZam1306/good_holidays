import { useState, type FormEvent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { credentialSchema } from "../../schemas/credential.schema";
import type { credentialInterface } from "../../types/credential.interface";
import Button from "./Button";

const LoginForm = () => {
  const { mutate } = useAuth();
  const [inputs, setInputs] = useState<credentialInterface>({
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
    if (!result.success) {
      console.log(result.error);
    } else {
      mutate({ credential: result.data, authType: "login" });
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="mx-2 flex flex-col items-stretch gap-4"
    >
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
      <Button type="submit">Login</Button>
      <button className="text-sm text-white underline" type="button">
        You forgot your password ? no problemo !
      </button>
    </form>
  );
};

export default LoginForm;
