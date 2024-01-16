import { ItemType } from "./types";
import closeIcon from "../../assets/close.svg";

type ChipProps = {
  data: ItemType;
  selectedChip: ItemType | null;
  onRemove: (item: ItemType) => void;
};

export function Chip({ data, selectedChip, onRemove }: ChipProps) {
  return (
    <li
      className={`rounded-full flex items-center gap-x-2 pr-2 whitespace-nowrap text-xs sm:text-sm transition-all duration-200 ${
        selectedChip?.id === data.id ? "bg-red-200" : "bg-gray-200"
      }`}
    >
      <img
        src={data.avatar}
        alt="Avatar"
        className="h-6 sm:h-8 w-6 sm:w-8 rounded-full cursor-default"
      />
      {data.name}
      <img
        src={closeIcon}
        alt="close"
        className="cursor-pointer h-3 sm:h-4 w-3 sm:w-4"
        onClick={() => onRemove(data)}
      />
      {/* <span
        className="select-none cursor-pointer"
        onClick={() => onRemove(data)}
      >
        X
      </span> */}
    </li>
  );
}
