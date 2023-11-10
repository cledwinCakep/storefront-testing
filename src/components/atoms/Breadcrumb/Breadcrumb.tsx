import React from "react";

// interfaces
interface BreadcrumbProps {
  children: React.ReactNode;
}

const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return (
    <div className="flex items-center gap-x-3">
      {children}
    </div>
  );
};

export default Breadcrumb;
