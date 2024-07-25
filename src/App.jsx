import { useState } from "react";
import "./App.css";

const BtnCount = () => {
  let [increase, setIncrease] = useState(0);
  let [totalClick, setTotalClick] = useState(0);

  const incFunc = () => {
    setIncrease((increase) => increase + 1);
  };
  const decFunc = () => {
    setIncrease((increase) => increase - 1);
  };
  const totFunction = () => {
    setTotalClick((totalClick) => totalClick + 1);
  };
  const resetFunc = () => {
    setIncrease(0);
    setTotalClick(0);
  };
  return (
    <>
      <h1>{increase}</h1>
      <button
        onClick={() => {
          incFunc();
          totFunction();
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          decFunc();
          totFunction();
        }}
      >
        decrease
      </button>
      <h2>Total clicked: {totalClick}</h2>
      <button onClick={resetFunc}>Reset</button>
    </>
  );
};

export default BtnCount;
