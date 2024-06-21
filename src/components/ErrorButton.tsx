import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const ErrorButton: FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`bg-red-200 text-sm font-medium text-red-800 py-1 px-4 rounded-full hover:bg-red-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ErrorButton;
