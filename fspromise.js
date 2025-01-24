//fspromise : 
//why .then() and .catch() ?
// .then() ensures clear chaining of multiple asynchronous operations 
// .catch() centralizes error handling making it easy to debug and  manage failures

const { error } = require("console")
const fs = require("fs")
const path = require("path")


const fileName = "fspromise.txt"
const filepath = path.join(__dirname , fileName) 

//  const file = __dirname
// fs.promises
// .readdir(file)
//     .then((data)=>console.log(data))
//     .catch((error)=>console.log(error))
    


    // const filepath1 = __dirname;
    // fs.promises
    // .readdir(filepath1)
    // .then((data)=>console.log(data))
    // .catch((error)=>console.log(error))



// add File
    // fs.promises
    // .writeFile(filepath, "this is the initial data add" , "utf-8")
    // .then((data)=>console.log("file create successfully"))
    // .then((err)=>console.log(err))

    


// Read data
// fs,promises.readfile(path, options, ).then(data).catch(eroor)
// fs.promises
// .readFile(filepath, "utf-8")
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))



// update file
// fs.promises
//     .appendFile(filepath, " \n this is the updated data " , "utf-8")
//     .then((data)=>console.log("file update successfully"))
//     .catch((err)=>console.log(err))



//  File deleted
// fs.promises
//     .unlink(filepath)
//     .then((data)=>console.log("file Deleted successfully"))
//     .catch((err)=>console.log("error deleting file:",err))



// are you tired of using fs.promises everytime ?
// you can  actually just import whti fs/promises
// const fs = require("fs/promises")
// now you don't need to use fs.promise everytime

// const fs = require("fs/promises")

// fs.writeFile(filepath, "this is the initial data add" , "utf-8")
//     .then((data)=>console.log("file create successfully"))
//     .then((err)=>console.log(err))
