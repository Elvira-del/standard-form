import { ReactNode } from "react";

type FormWrapperType = {
  children: ReactNode;
};

export default function FormWrapper({ children }: FormWrapperType) {
  return (
    <div className="flex flex-col items-center justify-between gap-y-8 mt-20 p-6 border rounded-md sm:p-12 md:p-20">
      {children}
    </div>
  );
}
