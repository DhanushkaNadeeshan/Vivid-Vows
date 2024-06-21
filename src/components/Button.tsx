import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, className = "" }) => {
  return (
    <button
      className={`bg-blue-200 text-sm font-medium text-blue-800 py-1 px-4 rounded-full hover:bg-blue-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
