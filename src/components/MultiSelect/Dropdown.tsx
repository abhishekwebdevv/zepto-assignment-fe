import dropdownList from "./dropdownList.json";
import { ItemType } from "./types";

type DropdownProps = {
  selectedItems: ItemType[];
  onItemClick: (item: ItemType) => void;
};
export function Dropdown({ selectedItems, onItemClick }: DropdownProps) {
  const filterDropdownList = () =>
    dropdownList.filter((item) => !selectedItems.includes(item));

  if (filterDropdownList().length === 0) return null;

  return (
    <ul
      className="invisible bg-white group-focus-within:visible absolute left-0 top-[120%] flex flex-col shadow-lg rounded-md overflow-hidden"
      tabIndex={0}
    >
      {filterDropdownList().map((listItem) => (
        <li
          key={listItem.id}
          className="flex items-center justify-start gap-x-2 hover:bg-gray-200 cursor-pointer p-2"
          onClick={() => onItemClick(listItem)}
        >
          <div className="h-8 sm:h-12 w-8 sm:w-12 rounded-full bg-blue-500" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-sm sm:text-base whitespace-nowrap">
            {listItem.name}
            <span className="text-sm text-gray-400">{listItem.email}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
