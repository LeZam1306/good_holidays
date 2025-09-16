import { useRef } from "react";
import Button from "../components/auth/Button";
import LoginForm from "../components/auth/LoginForm";
import SignupForm from "../components/auth/SignupForm";
import SlideUpPanel from "../components/common/SlideUpPanel";

interface SlideUpPanelHandle {
  togglePanel: () => void;
}

const Login = () => {
  const slideUpPanelRef = useRef<SlideUpPanelHandle>(null);

  return (
    <div className="h-full">
      <h1 className="mb-10 ml-2 text-center text-4xl font-semibold">
        Nice to see you ! <span className="text-5xl">👋</span>
      </h1>
      <LoginForm />
      <div className="w-full px-2">
        <Button
          key="signupToggle"
          action={() => slideUpPanelRef.current?.togglePanel()}
          className="absolute bottom-4 left-1/2 w-[calc(100%-16px)] -translate-x-1/2"
        >
          Signup
        </Button>
      </div>
      <SlideUpPanel ref={slideUpPanelRef}>
        <h2 className="mb-10 ml-2 text-center text-4xl font-semibold">
          It's time to start 💪
        </h2>
        <SignupForm />
      </SlideUpPanel>
    </div>
  );
};

export default Login;
