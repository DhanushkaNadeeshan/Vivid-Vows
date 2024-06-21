import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const SuccessButton: FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`bg-green-200 text-sm font-medium text-green-800 py-1 px-4 rounded-full hover:bg-green-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SuccessButton;
