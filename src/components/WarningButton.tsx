import { FC } from "react";

interface ButtonProps {
  title: string;
  onClick: () => void;
  className?: string;
}

const WarningButton: FC<ButtonProps> = ({ title, onClick, className = "" }) => {
  return (
    <button
      className={`bg-yellow-200 text-sm font-medium text-yellow-800 py-1 px-4 rounded-full hover:bg-yellow-300 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default WarningButton;
