import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Landing from "./pages/Landing";
import Chatroom from "./pages/Chatroom";
import Login from "./pages/Login";
import AboutYou from "./pages/AboutYou";
import Dashboard from "./pages/Dashboard";
import { useAuthContext } from "./hooks/useAuthContext";
import Events from "./pages/Events";
import Chat from "./components/Chat/Chat";
import Discover from "./pages/Discover";
import Shop from "./pages/Shop";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/chatroom"} element={<Chat />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/aboutyou"} element={<AboutYou />} />
          <Route
            path={"/dashboard"}
            element={user ? <Dashboard /> : <Login />}
          />
          <Route path={"/events"} element={user ? <Events /> : <Login />} />
          <Route path={"/discover"} element={user ? <Discover /> : <Login />} />
          <Route path={"/shop"} element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
