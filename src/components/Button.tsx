import { FC } from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  className?: string;
}

const Button: FC<ButtonProps> = ({ title, onClick, className = "" }) => {
  return (
    <button
      className={`bg-blue-200 text-sm font-medium text-blue-800 py-1 px-4 rounded-full hover:bg-blue-300 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
