import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
