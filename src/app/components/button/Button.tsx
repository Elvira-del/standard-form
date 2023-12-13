import { ButtonHTMLAttributes } from "react";

type ButtonType = {
  typeButton: "button" | "submit" | "reset" | undefined;
  text: string;
};
export default function Button({ typeButton, text }: ButtonType) {
  return (
    <button
      type={typeButton}
      className="flex w-full justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {text}
    </button>
  );
}
