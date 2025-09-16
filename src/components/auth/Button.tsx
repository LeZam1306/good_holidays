interface ButtonInterface {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  action?: () => void;
}

const Button = ({
  children,
  type = "button",
  className,
  action,
}: ButtonInterface) => {
  return (
    <button
      onClick={action}
      className={`${className} rounded-xl bg-yellow-400 px-4 py-3 text-lg font-semibold text-black`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
