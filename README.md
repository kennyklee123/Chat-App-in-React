# Real-Time-Chat-App
This App allows users to enter create and join live chat rooms.  Each chat room can support up to 25 users at a time!  To get started, just enter your name and the chat room you wish to join.  The front end was built using React and the back-end was built using Node.js, Express.js, and Socket.io for real time communication. 

## Demo
Try it out here at: https://realtimereactchatapp.netlify.app/

## Run Project Locally
Assumes local installation of [Node.js](https://nodejs.org)
* Clone or fork this repository.
* CD into both the client and the server
* In client/src/components/Chat/Chat.js look around line 40 for the const ENDPOINT and set that to your local host 3000 or whatever you want to use
* Run `npm install` on both client and server
* Run `npm start` on both client and server
