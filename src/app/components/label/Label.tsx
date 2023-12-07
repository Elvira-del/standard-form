import { ReactNode } from "react";

type LabelType = {
  inputId: string;
  children: ReactNode;
};
export default function Label({ inputId, children }: LabelType) {
  return (
    <label
      htmlFor={inputId}
      className="flex flex-col gap-2 text-sm font-medium leading-6 text-gray-900"
    >
      {children}
    </label>
  );
}
