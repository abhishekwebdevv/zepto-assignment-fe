// import { useRef } from "react";
import { ItemType } from "./types";

type ChipProps = {
  data: ItemType;
};

export function Chip({ data }: ChipProps) {
  // const listItemRef = useRef(null);

  return (
    <li
      className="rounded-full bg-gray-200 flex items-center gap-x-2 pr-2"
      // ref={listItemRef}
    >
      <div className="h-10 w-10 aspect-square rounded-full bg-green-500" />
      {data.name}
      <span
        className="select-none cursor-pointer"
        onClick={() => console.log("Remove Element")}
      >
        X
      </span>
    </li>
  );
}
