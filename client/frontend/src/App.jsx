import React from "react";
import Signin from "./signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
