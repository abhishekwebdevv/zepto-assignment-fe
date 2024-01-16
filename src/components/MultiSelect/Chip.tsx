// import { useRef } from "react";
import { ItemType } from "./types";

type ChipProps = {
  data: ItemType;
  onRemove: (item: ItemType) => void;
};

export function Chip({ data, onRemove }: ChipProps) {
  // const listItemRef = useRef(null);

  return (
    <li
      className="rounded-full bg-gray-200 flex items-center gap-x-2 pr-2 whitespace-nowrap text-xs sm:text-sm"
      // ref={listItemRef}
    >
      <div className="h-8 sm:h-10 w-8 sm:w-10 aspect-square rounded-full bg-green-500 cursor-default" />
      {data.name}
      <span
        className="select-none cursor-pointer"
        onClick={() => onRemove(data)}
      >
        X
      </span>
    </li>
  );
}
