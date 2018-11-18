import React from "react";
import ReactDOM from "react-dom";
import { store } from "./redux-setup";
import { Provider } from "react-redux";
import GDPR from "./gdpr/index";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <h1>Hello React Meetup!</h1>
        <GDPR />
      </React.Fragment>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
