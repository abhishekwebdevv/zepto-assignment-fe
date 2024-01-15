import { useRef, useState } from "react";
import { Dropdown } from "./Dropdown";
import { ItemType } from "./types";
import { Chip } from "./Chip";

export function MultiSelect() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedItems, setSelectedItems] = useState<ItemType[]>([]);

  const handleSelectItem = (item: ItemType) => {
    console.log("item", item);
    setSelectedItems((prev) => [...prev, item]);
  };

  return (
    <div className="">
      <label htmlFor="multi-input" className="text-sm font-semibold block">
        Select
      </label>

      <div
        className="flex items-center gap-x-2 group relative border p-2 focus-within:border-blue-400"
        onClick={() => inputRef.current?.focus()}
      >
        <ul className="flex items-center gap-x-2">
          {selectedItems.map((item) => (
            <Chip data={item} key={item.id} />
          ))}
        </ul>
        <input
          type="text"
          ref={inputRef}
          id="multi-input"
          name="multi-input"
          autoComplete="off"
          className="p-0 m-0 border-transparent focus:border-transparent focus:ring-0 w-full outline-none"
          // className="border focus:ring-0 outline-none"
        />

        <Dropdown
          selectedItems={selectedItems}
          onItemClick={handleSelectItem}
        />
      </div>
    </div>
  );
}
