import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

// import Message from "./Message";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
      <Alert>Hello World"</Alert>
    </div>
  );
}

export default App;
