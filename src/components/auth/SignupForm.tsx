import { useState, type FormEvent } from "react";
import { OrbitProgress } from "react-loading-indicators";
import { useAuth } from "../../hooks/useAuth.ts";
import { credentialSchema } from "../../schemas/credential.schema.ts";
import type { CredentialInterface } from "../../types/Credential.interface.ts";
import Button from "./Button";

const SignupForm = () => {
  const { mutate, isPending, data, isError } = useAuth();
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
        {isError && (
          <p className="w-full rounded-xl border-2 border-red-800 bg-red-950 px-4 py-3 text-center text-lg font-semibold text-white">
            {data?.error ? data.message : "Server error, try again later"}
          </p>
        )}
        <input
          className="w-full rounded-xl bg-gray-800 px-4 py-3 text-lg text-white"
          name="email"
          type="email"
          placeholder="myemail@mail.com"
          value={inputs.email}
          onChange={handleChange}
        />
        <input
          className="w-full rounded-xl bg-gray-800 px-4 py-3 text-lg text-white"
          name="password"
          type="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChange}
        />
      </div>
      <Button type="submit">
        {isPending ? (
          <OrbitProgress
            dense
            color="#ffffff"
            textColor="#ffffff"
            style={{ fontSize: "5px" }}
          />
        ) : (
          "Signup"
        )}
      </Button>
    </form>
  );
};

export default SignupForm;
