import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

type SubComponents = {
  Title: typeof Title;
  Body: typeof Body;
};

const Card: FC<CardProps> & SubComponents = ({ children }) => {
  return <div className="w-full p-2">{children}</div>;
};

interface TitleProps {
  children: ReactNode;
  CSS?: string;
}

const Title: FC<TitleProps> = ({ children, CSS }) => {
  return (
    <div className="bg-blue-200 p-2">
      <p className="text-sm text-center font-medium text-blue-800">
        {children}
      </p>
    </div>
  );
};

interface BodyProps {
  children: ReactNode;
}
const Body: FC<BodyProps> = ({ children }) => {
  return <div>{children}</div>;
};

Card.Title = Title;
Card.Body = Body;

export default Card;
