// import EventEmitter class
const EventEmitter = require('events')

// create an instance of EventEmitter
const emitter = new EventEmitter();

//define an  event listenner (addlistener)
emitter.on("greet" , (username , prof) =>{
    console.log(`hello ${username} , you are a ${prof}, ri8 `)
})
// Trigger (emit) the "greet" event
// emitter.emit("greet" , "satish jamle" ,"Full stack developer")

// // but it's best idea to take a single argumetn as an object.
// emitter.on("greet",(username ,prof)=>{
// console.log(`hello ${username} ,you are a ${prof} ,ri8`)

// });

// // Trigger (emit) the "greet" event
// emitter.emit("greet" , "satish jamle" ,"Full stack developer")

// // but it's best idea to take a single argumetn as an object.

emitter.on("greet" ,(arg)=>{
    console.log(`hello ${arg.username} , you are a ${arg.prof}`)

})
// Trigger (emit) the "greet" event
emitter.emit("greet" ,{username:"satish jamle" , prof:"full stack dev"});