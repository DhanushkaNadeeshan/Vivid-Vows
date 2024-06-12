"use client";
import { useState } from "react";
import { FC } from "react";
import { MdDeleteForever } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { MdCancel } from "react-icons/md";
import Tooltip from "./Tooltip";

interface ItemCardProps {
  title: string;
  //   remove: (index:number) => void;
  //   checked: (index:number) => void;
}

const ItemCard: FC<ItemCardProps> = ({ title }) => {
  const [isShowEditor, setIsShowEditor] = useState<boolean>(false);

  return (
    <div className="relative  flex w-full my-4 hover:shadow p-2 hover:bg-slate-200  ">
      <div className="min-w-3">
        <input type="checkbox" />
      </div>
      <p className="mx-1 text-sm grow">{title}</p>
      <div className="min-w-5">
        <RiEdit2Fill
          className=" text-slate-400 hover:cursor-pointer"
          onClick={() => setIsShowEditor(true)}
        />
      </div>
      {isShowEditor && (
        <div className="bg-blue-200 flex absolute right-2 top-0 rounded-md shadow text-slate-600 ">
          <Tooltip text="Delete">
            <MdDeleteForever className="m-2 hover:text-red-400 hover:cursor-pointer" />
          </Tooltip>
          <Tooltip text="Update">
            <GrUpdate className="m-2 hover:text-blue-600 hover:cursor-pointer" />
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
