import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Landing from "./pages/Landing";
import Chatroom from "./pages/Chatroom";
import Login from "./pages/Login";
import AboutYou from "./pages/AboutYou";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/chatroom"} element={<Chatroom />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/aboutyou"} element={<AboutYou />} />
          <Route path={"/dashboard"} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
