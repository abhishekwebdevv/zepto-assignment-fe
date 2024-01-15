import dropdownList from "./dropdownList.json";
import { ItemType } from "./types";

type DropdownProps = {
  selectedItems: ItemType[];
  onItemClick: (item: ItemType) => void;
};
export function Dropdown({ selectedItems, onItemClick }: DropdownProps) {
  const filterDropdownList = () =>
    dropdownList.filter((item) => !selectedItems.includes(item));

  return (
    <ul
      className="invisible group-focus-within:visible absolute left-0 top-[110%] w-full flex flex-col border"
      tabIndex={0}
    >
      {filterDropdownList().map((listItem) => (
        <li
          key={listItem.id}
          className="flex items-center gap-x-2 hover:bg-gray-200 cursor-pointer p-2"
          onClick={() => onItemClick(listItem)}
        >
          <div className="h-12 w-12 rounded-full bg-blue-500" />
          {listItem.name}
          <span className="text-sm text-gray-400">{listItem.email}</span>
        </li>
      ))}
    </ul>
  );
}
