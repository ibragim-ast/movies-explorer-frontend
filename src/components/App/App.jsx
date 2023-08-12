import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Register from "../Register/Register";
import auth from "../../utils/Auth.js";
import "./App.css";

function App() {
  const navigate = useNavigate();

  function handleRegister(formValue) {
    auth
      .register(formValue)
      .then(() => {
        navigate("/sign-in", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/sign-up"
          element={<Register onSubmit={handleRegister} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
