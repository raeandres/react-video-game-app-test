import ListGroup from "./components/ListGroup";

// import Message from "./Message";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  if (items.length === 0)
    return (
      <>
        <h1>List</h1>
        <p>No Item Found</p>
      </>
    );

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
