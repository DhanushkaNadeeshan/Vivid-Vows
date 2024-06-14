import { FC, ReactNode } from "react";

interface TableProps {
  children: ReactNode;
}

type Subcomponents = {
  TR: FC<TRProps>;
  TH: FC<THProps>;
  TD: FC<TDProps>;
  Body: FC<BodyProps>;
  Head: FC<HeadProps>;
};

const Table: FC<TableProps> & Subcomponents = ({ children }) => {
  return <table className="w-full">{children}</table>;
};

interface TRProps {
  children: ReactNode;
}

const TR: FC<TRProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

interface THProps {
  children: ReactNode;
  className?: string;
}

const TH: FC<THProps> = ({ children, className = "" }) => {
  return (
    <th className={`bg-blue-200 text-blue-700 text-sm font-semibold py-1 ${className}`}>{children}</th>
  );
};

interface TDProps {
  children: ReactNode;
  className?: string;
}

const TD: FC<TDProps> = ({ children, className }) => {
  return (
    <td className={`border border-slate-500 p-2 text-sm ${className}`}>
      {children}
    </td>
  );
};

interface HeadProps {
  children: ReactNode;
}

const Head: FC<HeadProps> = ({ children }) => {
  return <thead>{children}</thead>;
};

interface BodyProps {
  children: ReactNode;
}

const Body: FC<BodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

Table.TR = TR;
Table.TH = TH;
Table.TD = TD;
Table.Head = Head;
Table.Body = Body;

export default Table;
