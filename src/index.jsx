import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div className="bg-dark-blue font-nunito">
      <App />
    </div>
  </Provider>
);
