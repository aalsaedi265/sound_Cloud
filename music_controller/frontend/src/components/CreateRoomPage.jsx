
import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../static/css/CreateRoomPage.css';

export default function CreateRoomPage() {
  const [votesToSkip, setVotesToSkip] = useState(2);
  const [guestCanPause, setGuestCanPause] = useState(true);

  const handleVotesChange = (e) => {
    setVotesToSkip(e.target.value);
  };

  const handleGuestCanPauseChange = (e) => {
    setGuestCanPause(e.target.value === "true");
    };

    const handleRoomButtonPressed = () => {
      console.log(votesToSkip, guestCanPause);
  };

  return (
    <div id="create-room-page">
      <h1>Create A Room</h1>
      <div className="form-group">
        <label>Guest Control of Playback State</label>
        <div>
          <input
            type="radio"
            id="playPause"
            name="guestCanPause"
            value="true"
            //checked={guestCanPause === true}
            checked = {guestCanPause}
            onChange={handleGuestCanPauseChange}
          />
          <label htmlFor="playPause">Play/Pause</label>
          <input
            type="radio"
            id="noControl"
            name="guestCanPause"
            value="false"
            // checked={guestCanPause === false}
            checked = {!guestCanPause}
            onChange={handleGuestCanPauseChange}
          />
          <label htmlFor="noControl">No Control</label>
        </div>
      </div>
      <div className="form-group">
        <label>Votes Required To Skip Song</label>
        <input
          type="number"
          value={votesToSkip}
          onChange={handleVotesChange}
          min="1"
        />
      </div>
      <button className="btn-primary" onClick={handleRoomButtonPressed}>
        Create A Room
      </button>
      <button className="btn-secondary">
        <Link to="/">Back</Link>
      </button>
    </div>
  );
}
