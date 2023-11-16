import React from "react";
import { twMerge } from "tailwind-merge";

// interfaces
interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  [props: string]: any;
}

const Layout = ({ children, className, ...props }: LayoutProps) => {
  return (
    <div
      className={twMerge("mx-auto max-w-[1180px] px-4 lg:px-0", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Layout;
