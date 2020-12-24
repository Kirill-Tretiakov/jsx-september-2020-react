import React, { useState, useEffect, useReducer } from "react";
import "./index.css"

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TODO_ITEM": {
      return action.payload;
    }
    case "RESET_TODO": {
      return null;
    }
    case "TOGGLE_TODO_COMPLETED": {
      return {
        ...state,
        completed: !state.completed
      };
    }
    case "CHANGE_TODO_TITLE": {
      return {
        ...state,
        title: action.payload
      };
    }
    default: {
      console.error("not valid action", action.type);
      return state;
    }
  }
};

const initialState = null;

export default () => {
  const [counter, setCounter] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, inputChange] = useState("");

  const fetchData = async () => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${counter}`
    );
    const json = await response.json();

    dispatch({ type: "SET_TODO_ITEM", payload: json });
  };

  useEffect(() => {
    console.log("i was called");
    fetchData();
  }, [counter]);

  const handleInc = () => {
    setCounter((prevState) => prevState + 1);
  };

  const handleResetTodo = () => {
    dispatch({ type: "RESET_TODO" });
  };

  const handleTodoCompleted = () => {
    dispatch({ type: "TOGGLE_TODO_COMPLETED" });
  };

  const handleTitleChange = () => {
    dispatch({ type: "CHANGE_TODO_TITLE", payload: inputValue });
  };

  return (
      <div className="App">
        <h1>Counter : {counter}</h1>
        <button onClick={handleInc}>inc</button>
        <button onClick={handleResetTodo}>reset todo</button>
        <button onClick={handleTodoCompleted}>toggle</button>
        <input
            value={inputValue}
            onChange={({ target: { value } }) => inputChange(value)}
        />
        <button onClick={handleTitleChange}>chage title</button>
        {!!state && (
            <h2>
              {state.id} - {state.title} - {state.completed.toString()}
            </h2>
        )}
      </div>
  );
};
