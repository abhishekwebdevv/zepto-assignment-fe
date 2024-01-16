import { useRef, useState } from "react";
import { Dropdown } from "./Dropdown";
import { ItemType } from "./types";
import { Chip } from "./Chip";

export function MultiSelect() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedItems, setSelectedItems] = useState<ItemType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectItem = (item: ItemType) => {
    setSearchQuery("");
    setSelectedItems((prev) => [...prev, item]);
  };

  const handleRemoveItem = (item: ItemType) => {
    setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  return (
    <div className="">
      <label htmlFor="multi-input" className="text-sm font-semibold block">
        Select
      </label>

      <div
        className="flex items-center gap-x-2 group border-b p-2 focus-within:border-b-2 focus-within:border-blue-400 cursor-text"
        onClick={() => inputRef.current?.focus()}
      >
        <ul className="flex items-center gap-2 flex-wrap">
          {selectedItems.map((item) => (
            <Chip data={item} key={item.id} onRemove={handleRemoveItem} />
          ))}
          <li className="relative">
            <input
              type="text"
              ref={inputRef}
              id="multi-input"
              name="multi-input"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-0 m-0 border-transparent focus:border-transparent focus:ring-0 w-full outline-none"
            />
            <Dropdown
              selectedItems={selectedItems}
              searchQuery={searchQuery}
              onItemClick={handleSelectItem}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
