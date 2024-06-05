import "./App.css";
import { useState } from "react";
function App() {
  const [changeMessage, setMessage] = useState("");

  const [showMessage, setShow] = useState("Greeting Message");
  const handleMessageClick = () => {
    setShow(changeMessage);
  };

  return (
    <div className="App">
      <div className="greeting-container">{showMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={changeMessage}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
      </div>

      <div className="buttons">
        <button onClick={handleMessageClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
