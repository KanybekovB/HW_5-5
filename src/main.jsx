import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux"; // Исправлен импорт

import "./index.css";
import { BrowserRouter } from "react-router-dom";

const initialState = {
  products: [],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_CLICK":
      return {
        ...state,
        products: [...state.products, action.product],
      };
    default:
      return state;
  }
};

export const getProduct = (product) => {
  return {
    type: "BUY_CLICK",
    product: product,
  };
};

const store = createStore(counterReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
