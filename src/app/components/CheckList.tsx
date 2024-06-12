import { FC } from "react";
import List from "./List";

const CheckList: FC = () => {
  return (
    <section>
      <h2 className="my-4 text-xl text-slate-500">Planning Check List</h2>
      <div className="grid grid-cols-3">
        <List title="3 Weeks Prior" />
        <List title="1 Week Prior" />
        <List title="Day Of event" />
      </div>
    </section>
  );
};

export default CheckList;
