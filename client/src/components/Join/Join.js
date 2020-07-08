import React , {useState} from 'react';
import { Link } from 'react-router-dom'; //this is used to link to our /chat path
import './Join.css'; // apply the styles

{/*WE do not transfer data through props or redux, we only pass data usng query strings, passing data through a url.
  we use an empty string as the initial value of our name state
*/}

const Join = () => {
    const [name, setName] = useState(''); 
    const [room, setRoom] = useState(''); 

    return (
      <div className = "joinOuterContainer">   
          <div className = "joinInnerContainer">            
            <h1 className ="heading">Join</h1>
            {/*When users type something in this input an event occurs and we can grab data from it
            event.target.value holds our data, and then we set the output of this input to the corresponding variable.
            I also use two hooks here for the name/room data.
            event.target.value => event.target whatever is clicked on is returned, but the .value returns a string, so you set the Name to the string given
            */}
            <div><input placeholder ="Name" className = "joinInput" type ="text" onChange={(event) => setName(event.target.value)} /> </div>            
            <div><input placeholder ="Room" className = "joinInput mt-20" type ="text" onChange={(event) => setRoom(event.target.value)} /> </div> {/* mt 20 means margin top 20, used to differntiate the two*/}
            {/* We pass parameters into the url using ? and we pass in variables name and room, & divides name and room.
                The onClick part has a call back function, the event=> part that prevents the user from being able to click the link
                if they did not provide both parameters needed.
                logic is read as, if there is a room and name, we do nothing}(null)
            */}
            <Link onClick ={event => (!name || !room) ? event.preventDefault() : null} to ={`/chat?name=${name}&room=${room}`}>
                <button className = "button mt-20" type="submit">Sign In</button>  {/*This button is used to sign in*/}
            </Link>
          </div>
      </div>    
    )
}

export default Join;