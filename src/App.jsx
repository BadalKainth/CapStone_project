import { useState } from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomeScreen />
    </>
  );
}

export default App;
