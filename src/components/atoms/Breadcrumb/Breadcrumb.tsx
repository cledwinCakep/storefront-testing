import React from "react";

// interfaces
interface BreadcrumbProps {
  children: React.ReactNode;
}

const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return (
    <div className=" hidden items-center gap-x-3 px-3 py-4 sm:flex">
      {children}
    </div>
  );
};

export default Breadcrumb;
