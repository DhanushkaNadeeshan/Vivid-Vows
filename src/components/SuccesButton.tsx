import { FC } from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  className?: string;
}

const SuccessButton: FC<ButtonProps> = ({ title, onClick, className = "" }) => {
  return (
    <button
      className={`bg-green-200 text-sm font-medium text-green-800 py-1 px-4 rounded-full hover:bg-green-300 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default SuccessButton;
