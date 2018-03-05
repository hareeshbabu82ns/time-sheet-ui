import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "semantic-ui-css/semantic.min.css";

import App from "./App";
import timeSheetKeducer from "./keducers";

import registerServiceWorker from "./registerServiceWorker";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  timeSheetKeducer,
  composeEnhancers(applyMiddleware(thunk))
);

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<AppWrapper />, document.getElementById("root"));

registerServiceWorker();
