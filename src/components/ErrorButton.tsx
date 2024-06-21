import { FC } from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  className?: string;
}

const ErrorButton: FC<ButtonProps> = ({ title, onClick, className = "" }) => {
  return (
    <button
      className={`bg-red-200 text-sm font-medium text-red-800 py-1 px-4 rounded-full hover:bg-red-300 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ErrorButton;
