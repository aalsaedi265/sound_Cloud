
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Room() {
    const {roomCode} = useParams();// Get the roomCode from the URL
    const [votesToSkip, setVotesToSkip] = useState(2);
    const [guestPause, setGuestPause] = useState(false);
    const [isHost, setIsHost] = useState(false);


    const getRoomInfo = () => {
        fetch(`/api/get-room?code=${roomCode}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setVotesToSkip(data.votes_to_skip);
                setGuestPause(data.guest_can_pause);
                setIsHost(data.is_host);
            })
            .catch((error) => {
                console.error('Error fetching room details:', error);
            });
    }
    useEffect(() => {
        console.log("Fetching room details...")
        console.log("Room Code:", roomCode);
        getRoomInfo();
    }, [])// Empty dependency array means this effect runs once after the initial render

    
    

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