import { FC, ReactNode } from "react";

interface EditableTagProps {
  label: string;
  placeHolder?: string;
  type?: string;

}

const EditableTag: FC<EditableTagProps> = ({
  label,
  placeHolder = "Text here",
  type = "text",
}) => {
  return (
    <div className="p-2">
      <p className="text-xs text-slate-500 mb-1">{label}</p>
      <input
        type={type}
        className="p-1 focus:outline-none focus:ring focus:border-blue-500 font-medium hover:shadow hover:bg-slate-100"
        placeholder={placeHolder}
      ></input>
    </div>
  );
};

export default EditableTag;
