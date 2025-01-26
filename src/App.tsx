import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import ButtonComponent from "./components/ButtonComponent";
import { useState } from "react";

// import Message from "./Message";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleAction = (item: string) => {
    console.log(item);
  };

  const [clickedButton, setClickedButton] = useState("");

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>World</span>
      </Alert>
      <ButtonComponent color="primary" handleAction={handleAction}>
        Clicked
      </ButtonComponent>
    </div>
  );
}

export default App;
