import React from "react";

export default function Screen({ ScreenNumber }) {
  return (
    <div className="screen">
      <h1>{ScreenNumber.toLocaleString()}</h1>
    </div>
  );
}
