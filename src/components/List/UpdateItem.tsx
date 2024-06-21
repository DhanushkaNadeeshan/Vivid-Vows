import { FC, useState, KeyboardEvent } from "react";

import Modal from "@/components/Modal";
import { useList } from "./ListContext";
import { GrUpdate } from "react-icons/gr";

interface UpdateItemProps {
  index: number;
  title: string;
  hadleEditor: (state:boolean) => void;
}

const UpdateItem: FC<UpdateItemProps> = ({ index, title,hadleEditor }) => {
  const { updateItem } = useList();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [item, setItem] = useState<string>(title);

  const update = () => {
    if (item === "") {
      return;
    }
    const data = {
      item: item,
      selected: false,
    };

    updateItem(index, data);
    setIsShowModal(false);
    setItem("");
    hadleEditor(false)
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      update();
    }
  };

  const handleClose = () => {
    setIsShowModal(false);
    setItem("");
  };

  return (
    <>
      <GrUpdate
        className="m-2 hover:text-blue-600 hover:cursor-pointer"
        onClick={() => setIsShowModal(true)}
      />

      <Modal isShow={isShowModal}>
        <Modal.Title>Update</Modal.Title>
        <Modal.Body>
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="border border-slate-400 bg-slate-100 px-2 w-full rounded mt-2 "
            placeholder="Update"
            onKeyDown={handleKeyDown}
          />
        </Modal.Body>
        <Modal.Footer customeCSS="flex justify-end">
          <button onClick={update} className="m-4">
            Update
          </button>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateItem;
