import React, { useState, useEffect } from "react";
import "./App.scss";
import Theme from "./components/Theme";
import Screen from "./components/Screen.jsx";
import Keypad from "./components/Keypad.jsx";

function App() {
  const [ScreenNumber, SetScreenNumber] = useState(0);
  const [StorageNumber, SetStorageNumber] = useState(0);
  const [Operator, setOperator] = useState("");
  const [CurrentTheme, setCurrentTheme] = useState(1);
  const userPrefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const userPrefersLight =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches;
  useEffect(() => {
    if (userPrefersDark) setCurrentTheme(3);
    if (userPrefersLight) setCurrentTheme(2);
  }, []);
  const ThemeChanger = () => {
    if (CurrentTheme === 1) return "Theme-1";
    if (CurrentTheme === 2) return "Theme-2";
    if (CurrentTheme === 3) return "Theme-3";
  };

  return (
    <div className={`Wrapper ${ThemeChanger()}`}>
      <div className="App">
        <Theme CurrentTheme={CurrentTheme} setCurrentTheme={setCurrentTheme} />
        <Screen ScreenNumber={ScreenNumber} />
        <Keypad
          ScreenNumber={ScreenNumber}
          SetScreenNumber={SetScreenNumber}
          StorageNumber={StorageNumber}
          SetStorageNumber={SetStorageNumber}
          Operator={Operator}
          setOperator={setOperator}
        />
      </div>
    </div>
  );
}

export default App;
