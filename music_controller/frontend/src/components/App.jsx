
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import CreateRoomePage from "./CreateRoomePage.jsx";
import RoomJoinPage from "./RoomJoinPage.jsx";

function App() {
  return (
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateRoomePage />} />
      <Route path="/join" element={<RoomJoinPage />} />
    </Routes>
  );
}

export default App;
