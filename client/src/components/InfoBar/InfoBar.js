import React from 'react';
import './InfoBar.css';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

//contains jsx
//we do a full page refresh at the a href since we need to clean the socket off that is disconnected in chat.js
//infobar gets passed in room from chat.js and we display the name of that room below
const InfoBar = ( { room }) => (
    <div className = 'infoBar'>
        <div className = "leftInnerContainer">
            <img className = "onlineIcon" src = {onlineIcon} alt = "online" />
            <h3>{room} </h3>
        </div>
        <div className = "rightInnerContainer">
            <a href ="/"><img src = {closeIcon} alt = "close"/></a> 
        </div>
    </div>
)
export default InfoBar;