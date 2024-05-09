interface InputFieldProps {
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error: boolean;
}

export function InputField({
  id,
  value,
  onChange,
  placeholder,
  error,
}: InputFieldProps) {
  return (
    <input
      className={`shadow appearance-none border rounded w-1/3 py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
        error ? "border-red-500" : ""
      }`}
      id={id}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
