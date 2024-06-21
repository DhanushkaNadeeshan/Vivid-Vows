"use client";
import { FC, useState } from "react";
import List from "@/components/List";

const CheckList: FC = () => {
  return (
    <section>
      <h2 className="my-4 text-xl text-slate-500">Planning Check List</h2>
      <div className="grid grid-cols-3">
        <List title="Weeks Piror" />
        <List title="Week Piror" />
        <List title="Event Day" />
      </div>
    </section>
  );
};

export default CheckList;
