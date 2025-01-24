// import EventEmitter class
// const EventEmitter = require('events')

// // create an instance of EventEmitter
// const emitter = new EventEmitter();

//define an  event listenner (addlistener)
// emitter.on("greet" , (username , prof) =>{
//     console.log(`hello ${username} , you are a ${prof}, ri8 `)
// })
// // Trigger (emit) the "greet" event
// emitter.emit("greet" , "satish jamle" ,"Full stack developer")

// // but it's best idea to take a single argumetn as an object.
// emitter.on("greet",(username ,prof)=>{
// console.log(`hello ${username} ,you are a ${prof} ,ri8`)

// });

// // Trigger (emit) the "greet" event
// emitter.emit("greet" , "satish jamle" ,"Full stack developer")

// // but it's best idea to take a single argumetn as an object.

// emitter.on("greet" ,(arg)=>{
//     console.log(`hello ${arg.username} , you are a ${arg.prof}`)

// })
// // Trigger (emit) the "greet" event
// emitter.emit("greet" ,{username:"satish jamle" , prof:"full stack dev"});




// emit events task ? 
// Emitter.emit("user-login", "satish");
// Emitter.emit("user-purchase", "laptop");
// Emitter.emit("profile-uqdate", "thapa","email");
// Emitter.emit("user-logout", "satish");


const EventEmitter = require("events")
const Emitter = new EventEmitter();

const EventCounts = {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0,
};


Emitter.on("user-login", (username) => {
    EventCounts["user-login"]++
    console.log(`${username} logged in !!`)
});
Emitter.on("user-purchase", (username, item) => {
    EventCounts["user-purchase"]++

    console.log(`${username} purchase ${item}`)
});
Emitter.on("profile-update", (username, field) => {
    EventCounts["user-update"]++

    console.log(`${username} , update their ${field}`)
})
Emitter.on("user-logout", (username) => {
    EventCounts["user-logout"]++

    console.log(`${username} logout out  !!`)
})



Emitter.emit("user-login", "satish");
Emitter.emit("user-purchase", "satish", "laptop");
Emitter.emit("profile-update", "vijay", "email");
Emitter.emit("user-logout", "satish");



Emitter.emit("summary", () => {
    console.log(EventCounts)
});