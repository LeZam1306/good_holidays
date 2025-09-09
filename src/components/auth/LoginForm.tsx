import Button from "./Button";
import Input from "./Input";

const LoginForm = () => {
  const handleLogin = () => {};

  return (
    <form
      onSubmit={handleLogin}
      className="mx-2 flex flex-col items-stretch gap-4"
    >
      <Input name="email" type="mail" placeholder="myemail@mail.com" />
      <Input name="password" type="password" placeholder="Password" />
      <Button type="submit">Login</Button>
      <button className="text-sm text-white underline" type="button">
        You forgot your password ? no problemo !
      </button>
    </form>
  );
};

export default LoginForm;
