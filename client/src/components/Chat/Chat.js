import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import './Chat.css';

import Input from '../Input/Input';
import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';
import TextContainer from '../TextContainer/TextContainer';

let socket; 

{/*Notes on what I needed to import
    We are using hooks so we need useState/Effect that is important for life cycle emthods in hooks
    We use query-string module to retrieve data from the url
    We need io from socket.io-client
*/}

{/* The important of socket.io is placed in here below
    THIS IS ABOUT USE EFFECT HOOK
        The first useEffect is the first call, and runs when the component renders. 
        We need to retrieve the data users entered while joining, which is what we get from location.search and location comes from the react router
        For useEffect we stopped it from having two instances of socket by passing an array with endpoint and location.search.  
        If those two things change we re render our useeffect(this stops unneccesary side effects)   
    Things about Socket
        Emit allows you to pass in data, you pass in a string that the backend recognizes
        {name, room} is an object and it has the same syntax as {room:room }
        emit has a third parameter, which is a call back function, which executes the arrow function when socket.on's callbackis called, 
*/}

const Chat = ({ location }) => {

    const [name, setName] = useState(''); 
    const [room, setRoom] = useState(''); 
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const ENDPOINT = 'https://react-chat-app-project.herokuapp.com/';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
    
        socket = io(ENDPOINT);
    
        setRoom(room);
        setName(name)
    
        socket.emit('join', { name, room }, (error) => {
          if(error) {
            alert(error);
          }
        });
    }, [ENDPOINT, location.search]);

    //this useEffect is for handeling messages and only runs when messages array changes
    useEffect(() => {
        socket.on('message', message => {
          setMessages(messages => [ ...messages, message ]);//add new messages to our messages array the ... copies the old messages and all we do is append the new
        });
        
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    }, []);


    //functioning for sending messages (its a functional component hence why its a function)
    const sendMessage = (event) => {
        event.preventDefault(); // full browser refreshes aren't good

        if(message){
            socket.emit('sendMessage', message, () => setMessage('')) //on the callback from index.js our input field clears
        }


    }
    console.log(message,messages);
    // i need another component that will display the users 
    return (
        <div className ="outerContainer">
            <div className = "container"> 
                <InfoBar room = {room} />
                <Messages messages={messages} name={name} />
                <Input message = {message} setMessage={setMessage} sendMessage= {sendMessage} />
            </div>
            <TextContainer users={users}/>
        </div>
    )
}

export default Chat;