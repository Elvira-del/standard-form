type InputType = {
  type: string;
  name: string;
  id: string;
  placeholder: string;
};

export default function Input({ type, name, id, placeholder }: InputType) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  );
}
