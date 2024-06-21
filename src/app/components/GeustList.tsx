"use client";
import React, { FC, useState } from "react";
import Table from "@/components/Tabel";
import { FaCirclePlus } from "react-icons/fa6";
import SuccessButton from "@/components/SuccesButton";
import Modal from "@/components/Modal";
import ErrorButton from "@/components/ErrorButton";
import { FaTrash } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import Tooltip from "@/components/Tooltip";

type ListType = {
  name: string;
  invitation: boolean;
  attending: boolean;
  thankYou: boolean;
};

const GuestList: FC = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isShowUpdateModal, setIsShowUpdateModal] = useState<boolean>(false);
  const [guestName, setGuestName] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [list, setList] = useState<ListType[]>([]);

  const addNew = () => {
    const newGuest = {
      name: guestName,
      invitation: false,
      attending: false,
      thankYou: false,
    };
    setList([...list, newGuest]);
    setIsShowModal(false);
    setGuestName("");
  };

  const handleClose = () => {
    setGuestName("");
    setIsShowModal(false);
  };

  const updateItem = (index: number, name: string) => {
    setSelectedIndex(index);
    setGuestName(name);
    setIsShowUpdateModal(true);
  };

  const handleCloseUpdateModal = () => {
    setGuestName("");
    setSelectedIndex(null);
    setIsShowUpdateModal(false);
  };

  const onChangeCheckBox = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
    field: "invitation" | "attending" | "thankYou"
  ) => {
    let tempList = list.map((data, i) => {
      if (i === index) {
        return {
          ...data,
          [field]: event.target.checked,
        };
      }
      return data;
    });

    setList([...tempList]);
  };

  const updateSave = () => {
    if (guestName === "") {
      return false;
    }

    let tempList = list.map((data, i) => {
      if (i === selectedIndex) {
        return { ...data, name: guestName };
      }

      return data;
    });
    setList([...tempList]);
    handleCloseUpdateModal();
  };

  const deleteGuest = (index: number) => {
    let tempList = list;
    tempList.splice(index, 1);
    setList([...tempList]);
  };

  return (
    <section className="my-4">
      <div className="w-full flex justify-between">
        <h1 className="my-4 text-xl text-slate-500">Guest List</h1>

        <SuccessButton
          onClick={() => setIsShowModal(true)}
          className="flex items-center my-4"
        >
          <FaCirclePlus className="mr-2" /> Add New
        </SuccessButton>
      </div>
      <div>
        <Table>
          <Table.Body>
            <Table.TR>
              <Table.TH className="w-2/4">Name</Table.TH>
              <Table.TH>Invititaion</Table.TH>
              <Table.TH>Attending</Table.TH>
              <Table.TH>Thank You</Table.TH>
              <Table.TH>Action</Table.TH>
            </Table.TR>

            {list.map((data, i) => (
              <Table.TR key={i}>
                <Table.TD>{data.name}</Table.TD>
                <Table.TD className="text-center">
                  <input
                    type="checkbox"
                    checked={data.invitation}
                    onChange={(e) => onChangeCheckBox(e, i, "invitation")}
                  />
                </Table.TD>
                <Table.TD className="text-center">
                  <input
                    type="checkbox"
                    checked={data.attending}
                    onChange={(e) => onChangeCheckBox(e, i, "attending")}
                  />
                </Table.TD>
                <Table.TD className="text-center">
                  <input
                    type="checkbox"
                    checked={data.thankYou}
                    onChange={(e) => onChangeCheckBox(e, i, "thankYou")}
                  />
                </Table.TD>
                <Table.TD className="text-center">
                  <Tooltip text="Update">
                    <FaSync
                      className="mr-2 text-slate-500 hover:text-yellow-500 hover:cursor-pointer"
                      onClick={() => updateItem(i, data.name)}
                    />
                  </Tooltip>
                  <Tooltip text="Delete">
                    <FaTrash
                      className="text-slate-500 hover:text-red-500 hover:cursor-pointer"
                      onClick={() => deleteGuest(i)}
                    />
                  </Tooltip>
                </Table.TD>
              </Table.TR>
            ))}
          </Table.Body>
        </Table>
        {list.length === 0 && (
          <div className="text-slate-500 text-center text-sm p-2 bg-slate-200">
            Data is Not Available
          </div>
        )}
      </div>

      {/* Add new guest*/}
      <Modal isShow={isShowModal}>
        <Modal.Title>Add New Guest</Modal.Title>
        <Modal.Body>
          <input
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Guest Name"
            className="text-sm w-full p-2"
          />
        </Modal.Body>
        <Modal.Footer customeCSS="flex justify-end">
          <SuccessButton onClick={addNew} className="mx-2">
            Add
          </SuccessButton>
          <ErrorButton onClick={handleClose} className="mx-2">
            Close
          </ErrorButton>
        </Modal.Footer>
      </Modal>

      {/* update guest*/}
      <Modal isShow={isShowUpdateModal}>
        <Modal.Title>Update Guest</Modal.Title>
        <Modal.Body>
          <input
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Guest Name"
          />
        </Modal.Body>
        <Modal.Footer customeCSS="flex justify-end">
          <SuccessButton onClick={updateSave} className="mx-2">
            Update
          </SuccessButton>
          <ErrorButton onClick={handleCloseUpdateModal} className="mx-2">
            Close
          </ErrorButton>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default GuestList;
