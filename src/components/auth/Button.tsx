interface ButtonInterface {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button = ({ children, type = "button" }: ButtonInterface) => {
  return (
    <button
      className="rounded-full bg-yellow-400 px-4 py-3 text-lg font-semibold text-black"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
