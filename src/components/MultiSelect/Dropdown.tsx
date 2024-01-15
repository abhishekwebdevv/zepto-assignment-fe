import dropdownList from "./dropdownList.json";

export function Dropdown() {
  console.log(dropdownList);

  return (
    <ul className="group-focus-within:visible absolute left-0 top-full w-full flex flex-col border gap-y-2">
      {dropdownList.map((listItem) => (
        <li className="flex items-center gap-x-2">
          <div className="h-12 w-12 rounded-full bg-blue-500" />
          {listItem.name}
          <span className="text-sm text-gray-400">{listItem.email}</span>
        </li>
      ))}
    </ul>
  );
}
