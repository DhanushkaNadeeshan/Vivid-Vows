import { FC } from "react";
import Card from "@/components/Card";
import ItemCard from "@/components/ItemCard";
import { IoIosAddCircle } from "react-icons/io";

interface ListProps {
  title: string;
}

const List: FC<ListProps> = ({ title }) => {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Body>
        <div className="max-h-72 overflow-y-scroll scrollbar overflow-clip">
          <ItemCard title="Choose a party theme Choose a party theme Choose a party theme" />
          <ItemCard title="Make guest list" />
          <ItemCard title="Choose a party theme Choose a party theme Choose a party theme" />
          <ItemCard title="Choose a party theme Choose a party theme Choose a party theme" />
          <ItemCard title="Choose a party theme Choose a party theme Choose a party theme" />
          <ItemCard title="Make guest list" />
        </div>
        <div className="w-full p-2 flex justify-center items-center">
            <button className="text-xl text-slate-600"><IoIosAddCircle/></button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default List;
