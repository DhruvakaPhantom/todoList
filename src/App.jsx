import { useState } from "react";
import "../src/App.css";
import Todo from "./components/Todo";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Todo />
    </div>
  );
}

export default App;
