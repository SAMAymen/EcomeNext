import React from "react";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  if (!children) return null;

  return <span className="font-medium text-pink-700">{children}</span>;
};

export default ErrorMessage;
