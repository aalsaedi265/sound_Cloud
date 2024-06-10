
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import CreateRoomPage from "./CreateRoomPage.jsx";
import RoomJoinPage from "./RoomJoinPage.jsx";

function App() {
  return (
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateRoomPage />} />
      <Route path="/join" element={<RoomJoinPage />} />
    </Routes>
  );
}

export default App; 
