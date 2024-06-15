
import React,{useState} from "react";

function Room() {

    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guestPause, setGuestPause] = useState(false);
    const [isHost, setIsHost] = useState(false);

    const getRoomInfo = () => {
        fetch("")
    }



    return (
        <div>
            <h1>ROOM DETAILS</h1>
            <p>Votes to skip: {votesToSkip}</p>
            <p>Guest can pause: {guestPause ? "YES" : "NO"}</p>
            <p>Is host: {isHost ? "YES" : "NO"}</p>
        </div>
    );
}

export default Room