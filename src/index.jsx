import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");

const app = (
  <HelmetProvider>
    <Provider store={store}>
      <div className="bg-dark-blue font-nunito">
        <App />
      </div>
    </Provider>
  </HelmetProvider>
);

// react-snap prerenders each route to static HTML at build time; on real
// browsers that markup is already in #root, so we hydrate instead of
// re-rendering from scratch (which would briefly flash an empty page).
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
