"use client"
import { FC, useState } from "react";
import Card from "@/components/Card";
import ItemCard from "@/components/ItemCard";
import { IoIosAddCircle } from "react-icons/io";
import Modal from "@/components/Modal";

interface ListProps {
  title: string;
}

const List: FC<ListProps> = ({ title }) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <>
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
            <button
              className="text-xl text-slate-600"
              onClick={() => setIsShowModal(true)}
            >
              <IoIosAddCircle />
            </button>
          </div>
        </Card.Body>
      </Card>
      <Modal isShow={isShowModal}>
        <Modal.Title>Message</Modal.Title>
        <Modal.Body>
          <p>Hello World! 🌏❤️</p>
        </Modal.Body>
        <Modal.Footer customeCSS="flex justify-end">
          <button onClick={() => setIsShowModal(false)}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default List;
