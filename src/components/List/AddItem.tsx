import { FC, useState, KeyboardEvent } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Modal from "@/components/Modal";
import { useList } from "./ListContext";

const AddItem: FC = ({}) => {
  const { addItem } = useList();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [item, setItem] = useState<string>("");

  const add = () => {
    if (item === "") {
      return;
    }
    const data = {
      item: item,
      selected: false,
    };

    addItem(data);
    setIsShowModal(false);
    setItem("");
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      add();
      // You can call a function or perform some action here
    }
  };

  const handleClose = ()=>{
    setIsShowModal(false)
    setItem("")
  }

  return (
    <>
      <button
        className="text-xl text-slate-600"
        onClick={() => setIsShowModal(true)}
      >
        <IoIosAddCircle />
      </button>

      <Modal isShow={isShowModal}>
        <Modal.Title>Add New</Modal.Title>
        <Modal.Body>
          <input
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="border border-slate-400 bg-slate-100 px-2 w-full rounded mt-2 "
            placeholder="Add New"
            onKeyDown={handleKeyDown}
          />
        </Modal.Body>
        <Modal.Footer customeCSS="flex justify-end">
          <button onClick={add} className="m-4">
            Add
          </button>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddItem;
