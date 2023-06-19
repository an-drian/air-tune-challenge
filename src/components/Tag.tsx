import { FC } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

type TagProps = { onClick?: () => void; name: string };

export const Tag: FC<TagProps> = ({ name, onClick }) => (
  <div
    className="bg-cyan-500 rounded-md p-2 text-gray-100 text-sm mx-1 flex justify-between items-center"
    key={name}
  >
    <span>{name}</span>
    {onClick && (
      <button onClick={onClick} className="ml-2">
        <XMarkIcon className="h-4 w-4 text-orange-500" />
      </button>
    )}
  </div>
);


export default Tag;