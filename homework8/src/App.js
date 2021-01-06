import React, { memo, useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./styles.css";



const Test = memo(() => {
  console.log("test was rerendered");

  const storeCounter = useSelector(({ counter }) => counter);
  const dispatch = useDispatch();
  const inc = useCallback(() => dispatch({ type: "INC_COUNTER" }), [dispatch]);
  const dec = useCallback(() => dispatch({ type: "DEC_COUNTER" }), [dispatch]);
  const reset = useCallback(() => dispatch({ type: "RESET_COUNTER" }), [
    dispatch
  ]);
  return (
      <div>
        <h1>{storeCounter}</h1>
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
        <button onClick={reset}>reset</button>
      </div>
  );
});

export default function App() {
  const [counter, setCounter] = useState(0);
  const storeCounter = useSelector(({ counter }) => counter);

  return (
      <div className="App">
        <Test title="test" />
      </div>
  );
}
