import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/common/App";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import "./fonts/font.css";

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
