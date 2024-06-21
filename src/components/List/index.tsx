import { FC, ReactNode } from "react";
import { ListProvider, useList } from "./ListContext";
import ItemCard from "./ItemCard";
import Card from "../Card";
import AddItem from "./AddItem";

const ListComponent: FC = () => {
  const { list, title } = useList();

  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Body>
        <div className="max-h-72 min-h-72 overflow-y-scroll scrollbar overflow-clip">
          {list.map((val, i) => (
            <ItemCard title={val.item} key={i} index={i} />
          ))}
        </div>
        <div className="w-full p-2 flex justify-center items-center">
          <AddItem />
        </div>
      </Card.Body>
    </Card>
  );
};

type ItemType = {
  item: string;
  selected: boolean;
};

interface ListProps {
  itemList?: ItemType[];
  title: string;
}

const List: FC<ListProps> = ({ itemList, title }) => {
  return (
    <ListProvider initialList={itemList} title={title}>
      <ListComponent />
    </ListProvider>
  );
};

export default List;
