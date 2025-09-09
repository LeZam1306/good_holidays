import Button from "./Button";
import Input from "./Input";

const SignupForm = () => {
  const handleSignup = () => {};

  return (
    <form
      onSubmit={handleSignup}
      className="flex h-full flex-col justify-between gap-4"
    >
      <div className="flex flex-col gap-4">
        <Input
          bgColor="bg-gray-800"
          name="surnameSI"
          type="text"
          placeholder="surname"
        />
        <Input
          bgColor="bg-gray-800"
          name="emailSI"
          type="mail"
          placeholder="myemail@mail.com"
        />
        <Input
          bgColor="bg-gray-800"
          name="passwordSI"
          type="password"
          placeholder="Password"
        />
      </div>
      <Button type="submit">Signup</Button>
    </form>
  );
};

export default SignupForm;
