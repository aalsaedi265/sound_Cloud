
import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, CreateRoomPage, RoomJoinPage, Room } from  "./comp.js";



function App() {
  return (
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateRoomPage />} />
      <Route path="/join" element={<RoomJoinPage />} />
      <Route path="/room/:roomCode" element={<Room />} />
      
    </Routes>
  );
}

export default App; 
