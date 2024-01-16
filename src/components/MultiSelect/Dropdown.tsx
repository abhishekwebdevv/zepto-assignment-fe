import dropdownList from "./dropdownList.json";
import { ItemType } from "./types";

type DropdownProps = {
  selectedItems: ItemType[];
  searchQuery: string;
  onItemClick: (item: ItemType) => void;
};
export function Dropdown({
  selectedItems,
  searchQuery,
  onItemClick,
}: DropdownProps) {
  const filterDropdownList = () =>
    dropdownList.filter((item) => {
      const lowerSearchQuery = searchQuery.toLowerCase();
      const lowerItemName = item.name.toLowerCase();
      const lowerItemEmail = item.email.toLowerCase();

      return (
        !selectedItems.includes(item) &&
        (lowerItemName.includes(lowerSearchQuery) ||
          lowerItemEmail.includes(lowerSearchQuery))
      );
    });

  const highlightText = (text: string, query: string) => {
    const lowerText = text.toLowerCase();
    const startIndex = lowerText.indexOf(query.toLowerCase());

    if (startIndex !== -1) {
      const endIndex = startIndex + query.length;
      return (
        <>
          {text.substring(0, startIndex)}
          <span className="font-bold text-black">
            {text.substring(startIndex, endIndex)}
          </span>
          {text.substring(endIndex)}
        </>
      );
    }

    return text;
  };

  if (filterDropdownList().length === 0) return null;

  return (
    <ul className="invisible bg-white group-focus-within:visible absolute left-0 top-[120%] flex flex-col shadow-lg rounded-md w-max overflow-hidden">
      {filterDropdownList().map((listItem) => (
        <li
          key={listItem.id}
          className="flex items-center justify-start gap-x-2 hover:bg-gray-200 cursor-pointer p-2"
          tabIndex={listItem.id}
          onClick={() => onItemClick(listItem)}
        >
          <img
            src={listItem.avatar}
            alt=""
            className="h-8 sm:h-10 w-8 sm:w-10 rounded-full"
          />
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
            <span className="text-sm sm:text-base whitespace-nowrap text-gray-600">
              {highlightText(listItem.name, searchQuery)}
            </span>
            <span className="text-sm text-gray-400">
              {highlightText(listItem.email, searchQuery)}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
