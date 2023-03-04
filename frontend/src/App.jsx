import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Landing from "./pages/Landing";
import Chatroom from "./pages/Chatroom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/chatroom"} element={<Chatroom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
