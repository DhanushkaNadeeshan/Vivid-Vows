import React, {
  createContext,
  useContext,
  useState,
  FC,
  ReactNode,
} from "react";

type ItemType = {
  item: string;
  selected: boolean;
};

interface ListContextType {
  list: ItemType[];
  title: string;
  addItem: (item: ItemType) => void;
  updateItem: (index: number, item: ItemType) => void;
  removeItem: (index: number) => void;
}

const ListContext = createContext<ListContextType | undefined>(undefined);

interface ListProviderProps {
  children: ReactNode;
  initialList?: ItemType[];
  title: string;
}

export const ListProvider: FC<ListProviderProps> = ({
  children,
  initialList = [],
  title,
}) => {
  const [list, setList] = useState<ItemType[]>(initialList);

  const addItem = (item: ItemType) => {
    setList((prevList) => [...prevList, item]);
  };

  const removeItem = (index: number) => {
    let tempList = list;
    tempList.splice(index, 1);
    setList([...tempList]);
  };

  const updateItem = (index: number, newItem: ItemType) => {
    setList((prevList) =>
      prevList.map((item, i) => (i === index ? newItem : item))
    );
  };

  return (
    <ListContext.Provider
      value={{ list, addItem, removeItem, updateItem, title }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useList = (): ListContextType => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useList must be used within a ListProvider");
  }
  return context;
};
