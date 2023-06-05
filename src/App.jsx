import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import CryptoBox from "./components/CryptoBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <CryptoBox />
    </>
  );
}

export default App;
