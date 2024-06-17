
import React,{useState} from "react";
import '../../static/css/CreateRoomPage.css'
import { Link } from "react-router-dom";

export default function CreateRoomPage() {

    console.log('create room mounted');

    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guestPause, setGuestPause] = useState(true);

    function handelPause(e){
        setGuestPause(e.target.value=="true");
    }

    function handelVotesToSkip(e){
        setVotesToSkip(e.target.value);
    }

    function handleSubmit(){
        // e.preventDefault();
        //console.log({ votesToSkip, guestPause })
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                votes_to_skip: votesToSkip,
                guest_can_pause: guestPause
            })
        };
        fetch('/api/create-room', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
        }
    

    return (
        <div id="create-room-page">  
            <h1> Create Rogggggggggggggom Page </h1>
            <div className="form-group">
                <label> Control Options</label>
                <div>
                    <input
                        type="radio"
                        id="playPause"
                        name="control"
                        value="true"
                        //checked={guestCanPause === true
                        checked={guestPause}
                        onChange={handelPause}
                    />
                    <label htmlFor="playPause"> PLAY/PAUSE </label>
                    <input
                        type="radio"
                        id="noControl"
                        name="control"
                        value="false"
                        //checked={guestCanPause === false}
                        checked={!guestPause}
                        onChange={handelPause}
                    />
                    <label htmlFor="noControl"> NO CONTROL </label>
                </div>
            </div>
            <div className="form-group">
                <label> Votes to Skip: </label>
                <input
                    type="number"
                    name="votesToSkip"
                    className="form-control"
                    value={votesToSkip}
                    onChange={handelVotesToSkip}
                />
            </div>
            <button className="btn-primary" onClick={handleSubmit}>
                Create Room
            </button>
            <button className="btn-secondary">
                <Link to="/"> Back</Link>
            </button>
        </div>
  );
}
