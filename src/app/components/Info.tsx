import { FC } from "react";
import EditableTag from "@/components/EditableTag";

const Info: FC = () => {
  return (
    <section className="grid grid-cols-2 gap-2">
      <EditableTag label="Title" placeHolder="Title" />
      <EditableTag label="Event date" placeHolder="Event Date" type="date"/>
      <EditableTag label="Venue / Location" placeHolder="Vanue /Location" />
      <EditableTag label="Start Time" placeHolder="Start Time" type="time" />
    </section>
  );
};

export default Info;
