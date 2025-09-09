interface InputInterface {
  name: string;
  type?: string;
  placeholder?: string;
  bgColor?: string;
  action?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input = ({
  type = "text",
  placeholder,
  name,
  bgColor = "bg-gray-900",
  action,
  value,
}: InputInterface) => {
  return (
    <input
      id={name}
      name={name}
      className={`w-full rounded-full px-4 py-3 text-lg text-white ${bgColor}`}
      type={type}
      placeholder={placeholder}
      onChange={action}
      value={value}
    />
  );
};

export default Input;
