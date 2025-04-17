import React from "react";
import Signin from "./signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login"
import Home from "./home"
import home from "./home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
