import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { iam } from "./config/auth";

import AppRouter from "./routers/AppRouter";

class App extends Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;
