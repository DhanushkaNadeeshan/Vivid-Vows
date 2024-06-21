"use client";
import { useState } from "react";
import { FC } from "react";
import { MdDeleteForever } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import UpdateItem from "./UpdateItem";
import { MdCancel } from "react-icons/md";
import Tooltip from "../Tooltip";
import { useList } from "./ListContext";

interface ItemCardProps {
  title: string;
  index: number;
}

const ItemCard: FC<ItemCardProps> = ({ title, index }) => {
  const [isShowEditor, setIsShowEditor] = useState<boolean>(false);
  const { removeItem } = useList();

  const handleRemoveItem = () => {
    removeItem(index);
    setIsShowEditor(false);
  };

  return (
    <div className="relative  flex w-full my-4 hover:shadow p-2 hover:bg-slate-200  ">
      <div className="min-w-3">
        <input type="checkbox" />
      </div>
      <p className="mx-1 text-sm grow px-1">{title}</p>
      <div className="min-w-5">
        <RiEdit2Fill
          className=" text-slate-400 hover:cursor-pointer"
          onClick={() => setIsShowEditor(true)}
        />
      </div>
      {isShowEditor && (
        <div className="bg-blue-200 flex absolute right-2 top-0 rounded-md shadow text-slate-600 ">
          <Tooltip text="Delete">
            <MdDeleteForever
              className="m-2 hover:text-red-400 hover:cursor-pointer"
              onClick={handleRemoveItem}
            />
          </Tooltip>
          <Tooltip text="Update">
            
            <UpdateItem index={index} title={title} hadleEditor={setIsShowEditor}/>
          </Tooltip>
          <Tooltip text="Close">
            <MdCancel
              data-tooltip-target="tooltip-top"
              className="m-2 hover:text-red-400 hover:cursor-pointer"
              onClick={() => setIsShowEditor(false)}
            />
          </Tooltip>
        </div>
      )}
    </div>
  );
};

export default ItemCard;
