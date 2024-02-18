import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.js";
import { GlobalStyle } from "./main.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/CarRent">
      <Provider store={store}>
        <GlobalStyle />
        <App />
        <ToastContainer
          autoClose={3000}
          toastClassName={"tost"}
          position="top-center"
        />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
