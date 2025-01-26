import ListGroup from "./components/ListGroup";

// import Message from "./Message";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  const message = items.length === 0 ? <p>No Item found</p> : null;

  const getMessage = () => {
    return items.length === 0 ? <p>No Item found</p> : null;
  };

  const getMessageShorter = () => {
    return items.length === 0 && <p>No Item found</p>; // more concise way
  };

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      {getMessageShorter()}
      <ul className="list-group">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
