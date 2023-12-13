import { ReactNode } from "react";

type ContainerType = {
  children: ReactNode;
};

export default function Container({ children }: ContainerType) {
  return (
    <div className="max-w-sm w-full mx-auto px-4 sm:max-w-md sm:px-7 md:max-w-lg md:px-12 lg:max-w-3xl xl:max-w-5xl xl:px-36 2xl:max-w-7xl">
      {children}
    </div>
  );
}
