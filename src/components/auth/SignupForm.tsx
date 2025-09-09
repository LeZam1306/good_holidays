import { useState, type FormEvent } from "react";
import { useAuth } from "../../hooks/useAuth.ts";
import { credentialSchema } from "../../schemas/credential.schema.ts";
import type { credentialInterface } from "../../types/credential.interface.ts";
import Button from "./Button";

const SignupForm = () => {
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

  const handleSignup = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = credentialSchema.safeParse(inputs);
    if (!result.success) {
      console.log(result.error);
    } else {
      mutate({ credential: result.data, authType: "signup" });
    }
  };

  return (
    <form
      onSubmit={handleSignup}
      className="flex h-full flex-col justify-between gap-4"
    >
      <div className="flex flex-col gap-4">
        {/*<input
          className="w-full rounded-full bg-gray-800 px-4 py-3 text-lg text-white"
          name="surnameSI"
          type="text"
          placeholder="surname"
        />*/}
        <input
          className="w-full rounded-full bg-gray-800 px-4 py-3 text-lg text-white"
          name="email"
          type="email"
          placeholder="myemail@mail.com"
          value={inputs.email}
          onChange={handleChange}
        />
        <input
          className="w-full rounded-full bg-gray-800 px-4 py-3 text-lg text-white"
          name="password"
          type="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">Signup</Button>
    </form>
  );
};

export default SignupForm;
