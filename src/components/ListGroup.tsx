import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup(props: Props) {
  const getMessage = () => {
    return props.items.length === 0 ? <p>No Item found</p> : null;
  };

  const getMessageShorter = () => {
    return props.items.length === 0 && <p>No Item found</p>; // more concise way
  };

  // hook
  const state = useState(-1);
  state[0]; // variable (selectedIndex)
  state[1]; // updated function

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handling
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{props.heading}</h1>
      {getMessageShorter()}
      <ul className="list-group">
        {props.items.map((item, idx) => (
          <li
            className={
              selectedIndex == idx
                ? "list-group-item active"
                : "list-group-item"
            }
            key={idx}
            onClick={() => {
              setSelectedIndex(idx);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
