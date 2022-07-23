import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <h1 class="top-heading">
        The <b>privacy-friendly</b> URL Shortener
      </h1>
      <Input setInputValue={setInputValue} />

      <Result inputValue={inputValue} />
    </div>
  );
}

export default App;
