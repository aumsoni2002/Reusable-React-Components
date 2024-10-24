import { useState } from "react";
import Dropdown from "../components/Dropdown";
function DropdownPage() {
  const [selection, setSelection] = useState(null);

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const handleSelectOption = (selectedOption) => {
    setSelection(selectedOption);
  };
  return (
    <Dropdown
      onChange={handleSelectOption}
      options={options}
      value={selection}
    />
  );
}

export default DropdownPage;
