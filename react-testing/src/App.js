import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("rot");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  function farbeWechseln() {
    // Die Farbe ändert sich nur, wenn der Button aktiviert ist.
    if (!isButtonDisabled) {
      const nextColor = buttonColor === "rot" ? "blau" : "rot";
      setButtonColor(nextColor);
    }
  }

  function handleCheckboxChange() {
    setIsButtonDisabled(prevState => !prevState);
    // Wenn der Button deaktiviert wird, setzen wir die Farbe auf grau.
    if (!isButtonDisabled) {
      setButtonColor("grau");
    } else {
      // Setzen die Farbe zurück zu rot, wenn der Button wieder aktiviert wird.
      setButtonColor("rot");
    }
  }

  return (
    <div className="App">
      <button
        disabled={isButtonDisabled}
        className={isButtonDisabled ? "grau" : buttonColor}
        onClick={farbeWechseln}
      >
        Farbe zu {buttonColor === "rot" ? "blau" : "rot"} wechseln
      </button>
      <br></br>
      <input id="checkbox" type="checkbox" onChange={handleCheckboxChange}></input>
      <label htmlFor="checkbox">Disable Button</label>
    </div>
  );
}

export default App;
