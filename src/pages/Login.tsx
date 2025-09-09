import SlideUpPanel from "../components/SlideUpPanel";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";
const Login = () => {
  return (
    <div className="h-full">
      <h1 className="mb-10 ml-2 text-center text-4xl font-semibold">
        Nice to see you ! <span className="text-5xl">👋</span>
      </h1>
      <LoginForm />
      <SlideUpPanel>
        <p className="flex h-[97px] items-center justify-center pb-8 text-center text-lg">
          ☝️You want to signup ? swipe-up !☝️
        </p>
        <SignupForm />
      </SlideUpPanel>
    </div>
  );
};

export default Login;
