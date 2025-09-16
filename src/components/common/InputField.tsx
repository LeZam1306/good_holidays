interface InputFieldProps {
  // Required
  name: string;
  type?: string;

  // Optional with smart defaults
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string;

  // Styling variants
  variant?: "auth" | "form"; // auth=bg-gray-900, form=bg-gray-800

  // Event handlers
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  // Custom styling
  className?: string;
  labelClassName?: string;
}

const InputField = ({
  name,
  type = "text",
  id,
  label,
  placeholder,
  value,
  variant = "form",
  onChange,
  className = "",
  labelClassName = "",
}: InputFieldProps) => {
  // Smart default: if no id provided, use name
  const inputId = id || name;

  // Base styles
  const baseInputStyles = "w-full rounded-xl px-4 py-3 text-lg text-white";

  // Variant styles
  const variantStyles = {
    auth: "bg-gray-900", // LoginForm & SignupForm
    form: "bg-gray-800", // CreateEventForm
  };

  // Date input special handling
  const dateStyles =
    type === "date" ? "[&::-webkit-calendar-picker-indicator]:invert" : "";

  // Combined input styles
  const inputStyles =
    `${baseInputStyles} ${variantStyles[variant]} ${dateStyles} ${className}`.trim();

  // Label styles
  const baseLabelStyles = "mb-1 block text-sm font-medium text-gray-300";
  const finalLabelStyles = `${baseLabelStyles} ${labelClassName}`.trim();

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className={finalLabelStyles}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={inputStyles}
      />
    </div>
  );
};

export default InputField;
