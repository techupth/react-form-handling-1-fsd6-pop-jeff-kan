import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [input, setInput] = useState("Greeting Message");
  const clickToSend = () => {setInput(message)};
  return (
    <div className="App">
      <div className="greeting-container">
        {input}
      </div>
      <div className="input-container">
      <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button onClick={clickToSend}>Update text</button>
      </div>
    </div>
  );
}

export default App;
