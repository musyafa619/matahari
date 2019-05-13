import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Containers/Home";

function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
    </div>
  );
}

export default App;
