import React from "react";

export default function Theme({ setCurrentTheme, CurrentTheme }) {
  const InputHandle = (e) => {
    setCurrentTheme(Number(e.target.value));
  };

  return (
    <div className="theme">
      <h1>calc</h1>
      <div className="theme-input-container">
        <h2>THEME</h2>
        <div className="theme-input">
          <div className="current-theme">
            <h3>1</h3>
            <h3>2</h3>
            <h3>3</h3>
          </div>
          <input
            onChange={InputHandle}
            type="range"
            value={CurrentTheme}
            min="1"
            max="3"
          />
        </div>
      </div>
    </div>
  );
}
