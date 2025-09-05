import SlideUpPanel from "../components/SlideUpPanel";

const Login = () => {
  return (
    <div className="h-full">
      <h1 className="mb-10 ml-2 text-center text-4xl font-semibold">
        Nice to see you ! <span className="text-5xl">👋</span>
      </h1>
      <form className="mx-2 flex flex-col items-stretch gap-4">
        <input
          id="email"
          name="email"
          type="mail"
          placeholder="myemail@mail.com"
          className="w-full rounded-full bg-gray-900 px-4 py-3 text-lg text-white"
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="w-full rounded-full bg-gray-900 px-4 py-3 text-lg text-white"
        />
        <button
          className="rounded-full bg-yellow-400 px-4 py-3 text-lg font-semibold text-black"
          type="submit"
        >
          Login
        </button>
        <button className="text-sm text-white underline" type="button">
          You forgot your password ? no problemo !
        </button>
      </form>
      <SlideUpPanel>
        <p className="flex h-[97px] items-center justify-center pb-8 text-center text-lg">
          ☝️You want to signup ? swipe-up !☝️
        </p>
        <form className="flex h-full flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Pseudo"
              className="w-full rounded-full bg-gray-800 px-4 py-3 text-lg text-white"
            />
            <input
              id="email"
              name="email"
              type="text"
              placeholder="myemail@mail.com"
              className="w-full rounded-full bg-gray-800 px-4 py-3 text-lg text-white"
            />
            <input
              id="email"
              name="password"
              type="text"
              placeholder="Password"
              className="w-full rounded-full bg-gray-800 px-4 py-3 text-lg text-white"
            />
          </div>
          <button className="rounded-full bg-yellow-400 px-4 py-3 text-lg font-semibold text-black">
            Signup
          </button>
        </form>
      </SlideUpPanel>
    </div>
  );
};

export default Login;
