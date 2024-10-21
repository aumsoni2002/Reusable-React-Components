import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (indexParameter) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === indexParameter) {
        // console.log(-1);
        return -1;
      } else {
        // console.log(indexParameter)
        return indexParameter;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    // || gives back the first value that is truthy
    // && gives back the first falsy value or the last truthy value.
    const content = isExpanded && (
      <div className="border-b p-5">{item.content}</div>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => {
            handleClick(index);
          }}
        >
          {item.label}
          {icon}
        </div>
        {content}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
