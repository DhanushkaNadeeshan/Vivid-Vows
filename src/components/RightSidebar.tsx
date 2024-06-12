import { FC, ReactNode } from "react";

interface RightSidebarProps {
  children: ReactNode;
}

type SubComponents = {
  Item: typeof Item;
  List: typeof List;
};

const RightSidebar: FC<RightSidebarProps> & SubComponents = ({ children }) => {
  return (
    <div className="fixed right-0  w-1/4 p-4 h-[80vh] border-l-2 border-slate-500">
      {children}
    </div>
  );
};

interface ListProps {
  children: ReactNode;
}

const List: FC<ListProps> = ({ children }) => {
  return <ul> {children}</ul>;
};

interface ItemProps {
  children: ReactNode;
}

const Item: FC<ItemProps> = ({ children }) => {
  return <li  className="text-sm my-2 hover:text-blue-500 hover:cursor-pointer">{children}</li>;
};

RightSidebar.Item = Item;
RightSidebar.List = List;

export default RightSidebar;
