import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("");
  const [showMessage, setShowMessage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{showMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => setGreetingMessage(event.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={() => setShowMessage(greetingMessage)}>
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
