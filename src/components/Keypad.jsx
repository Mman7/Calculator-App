import React from "react";

export default function Keypad({
  ScreenNumber,
  SetScreenNumber,
  StorageNumber,
  SetStorageNumber,
  Operator,
  setOperator,
}) {
  const AddNumber = (number) => {
    SetScreenNumber(Number(`${ScreenNumber}${number}`));
  };

  const DeleteNumber = () => {
    const input = String(ScreenNumber);
    const lastnumber = input.slice(-1);
    SetScreenNumber(Number(input.replace(lastnumber, "")));
  };
  const ResetNumber = () => {
    SetStorageNumber(0);
    SetScreenNumber(0);
    setOperator("");
  };

  const OperatorNumber = (operator) => {
    SetStorageNumber(ScreenNumber);
    SetScreenNumber(0);
    setOperator(operator);
  };
  //*DOC:* https://mathjs.org/docs/getting_started.html */
  const CalculateNumber = () => {
    const strNumb = Number(StorageNumber);
    const scnNumb = Number(ScreenNumber);
    if (Operator === "") SetScreenNumber(scnNumb);
    if (Operator === "+")
      SetScreenNumber(math.evaluate(`${strNumb} + ${scnNumb}`));
    if (Operator === "-")
      SetScreenNumber(math.evaluate(`${strNumb} - ${scnNumb}`));
    if (Operator === "x")
      SetScreenNumber(math.evaluate(`${strNumb} * ${scnNumb}`));
    if (Operator === "/")
      SetScreenNumber(math.evaluate(`${strNumb} / ${scnNumb}`));
  };
  const AddDot = () => {
    SetScreenNumber(`${ScreenNumber}.`);
  };

  return (
    <div className="keypad-container">
      <button onClick={() => AddNumber(7)}>7</button>
      <button onClick={() => AddNumber(8)}>8</button>
      <button onClick={() => AddNumber(9)}>9</button>
      <button onClick={DeleteNumber} className="delete-btn">
        DEL
      </button>

      <button onClick={() => AddNumber(4)}>4</button>
      <button onClick={() => AddNumber(5)}>5</button>
      <button onClick={() => AddNumber(6)}>6</button>
      <button onClick={() => OperatorNumber("+")}>+</button>

      <button onClick={() => AddNumber(1)}>1</button>
      <button onClick={() => AddNumber(2)}>2</button>
      <button onClick={() => AddNumber(3)}>3</button>
      <button onClick={() => OperatorNumber("-")}>-</button>

      <button onClick={AddDot}>.</button>
      <button onClick={() => AddNumber(0)}>0</button>
      <button onClick={() => OperatorNumber("/")}>/</button>
      <button onClick={() => OperatorNumber("x")}>x</button>

      <button onClick={ResetNumber} className="Reset-button">
        RESET
      </button>
      <button onClick={CalculateNumber} className="Calculate-button">
        =
      </button>
    </div>
  );
}
