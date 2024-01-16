import { ItemType } from "./types";

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
      <div className="h-6 sm:h-8 w-6 sm:w-8 aspect-square rounded-full bg-green-500 cursor-default" />
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
