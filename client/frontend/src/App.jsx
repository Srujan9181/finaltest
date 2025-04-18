import React from "react";
import Signin from "./signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login"
import Home from "./home"
import Dashboardhome from "./Dashboardhome";
import Dashboard from "./Dashboard";
import Contact from "./Contact"
import Stats from "./Stats"
import Members from "./Members"
import Settings from "./Settings"
import Bot from './Bot'
import Userhome from "./Userhome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/userhome" element={<Userhome />}></Route>
        <Route path="signin" element={<Signin />}></Route>
        <Route path="login" element={<Login />} ></Route>
        <Route path="dashboard" element={<Dashboard />}>

          <Route path="" element={<Dashboardhome />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="stats" element={<Stats />}></Route>
          <Route path="bot" element={<Bot />}></Route>
          <Route path="members" element={<Members />}></Route>
          <Route path="settings" element={<Settings />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
