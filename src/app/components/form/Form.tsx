import { ReactNode } from "react";

type FormType = {
  children: ReactNode;
};

export default function Form({ children }: FormType) {
  return (
    <form action="#" className="flex flex-col gap-8 max-w-full w-full">
      {children}
    </form>
  );
}
