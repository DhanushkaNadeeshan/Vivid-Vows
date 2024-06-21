import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  className?: string;
}

const WarningButton: FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      className={`bg-yellow-200 text-sm font-medium text-yellow-800 py-1 px-4 rounded-full hover:bg-yellow-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default WarningButton;
