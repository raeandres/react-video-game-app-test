import ListGroup from "./components/ListGroup";
import { MouseEvent } from "react";

// import Message from "./Message";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const message = items.length === 0 ? <p>No Item found</p> : null;

  const getMessage = () => {
    return items.length === 0 ? <p>No Item found</p> : null;
  };

  const getMessageShorter = () => {
    return items.length === 0 && <p>No Item found</p>; // more concise way
  };

  // Event Handling
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {getMessageShorter()}
      <ul className="list-group">
        {items.map((item, idx) => (
          <li
            className="list-group-item active"
            key={idx}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
