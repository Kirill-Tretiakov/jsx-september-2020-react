import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INC_COUNTER": {
            return { ...state, counter: state.counter + 1 };
        }
        case "DEC_COUNTER": {
            return { ...state, counter: state.counter - 1 };
        }
        case "SET_CUSTOM_VALUE": {
            return { ...state, counter: action.payload };
        }
        case "RESET_COUNTER": {
            return { ...state, counter: 0 };
        }
        default: {
            return state;
        }
    }
};

export const store = createStore(reducer);

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch({type: 'INC_COUNTER'})
// store.dispatch({type: 'INC_COUNTER'})
// store.dispatch({type: 'INC_COUNTER'})

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    rootElement
);
