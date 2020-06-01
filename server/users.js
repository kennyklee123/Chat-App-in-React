const users = []; //users  is an empty array, as when initialized there are none yet
//function to add User takes three parameters, id of a socket instance

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase(); 
    //we check if the new user is trying to signup for the same room and the same user name, which cant be allowed 
    //we do this by going through the user array and checking every single user to see if there is any match
    const existingUser = users.find((user) => user.room  === room && user.name === name); 
    //if the user does already exist, return an error
    if(existingUser){
        return {error: 'Username is taken'}
    }
    //no existing user so we make one(an object that contains id,name,room) and add it to the users array
    const user = { id, name, room };
    users.push(user);
    return { user } //return the user so we know which one was pushed
} 
//function to remove user, only takes in a single parameter(id of the user to remove)
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);  //checks to see if there is a user with that id passed in
    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}
//if the user exists we return it 
const getUser = (id) => users.find((user) => user.id === id);
//.filter creates a new array with all elements that pass the test implemented in the function
//we return an array with all the users in the room
const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };