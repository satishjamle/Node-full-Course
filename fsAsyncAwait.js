// const { error } = require("console")
// const fs = require("fs/promises")
// const path = require("path")

// const fileName = "fsAsyncAwait.txt"

// const filepath = path.join(__dirname ,fileName)

// const filepath1 = __dirname

// promise
// fs
// .readdir(filepath)
// .then((data)=> console.log(data))
// .catch((error)=>console.log(error))


// //Async Await
// const readFolder = async () => {
//     try{
//     const res  = await fs.readdir(filepath1);
//     console.log(res);

//     }
//     catch(eroor){
// console.error(error);
//     }
// }
// readFolder();


//crud operations :
// fspromises.writeFile() : wirtes data to a file asynchronously . if the file exists ,it overwrites the content

// syntax : fsPromises.writeFile(path, data, options)

//path : the file path to write to 
//data : the content to write to the file 
//options : specifies encoding (e.g. "utf-8") , mode, or flags

// const writeFileExample = async () => {
//     try{
//     await fs.writeFile(filepath ,"THIS IS THE  INITIAL DATA" , "utf-8")
//         console.log("file created successfully !!")

//     }
//     catch(error){
//         console.log(error)
//     }
// }
// writeFileExample();





// Reading a file : promises.readfile() : reads the cotents of a fle asynchronously.

// syntax : fspromises. readFile(path, option)

//path : the file path to write to 
//options : specifies encoding (e.g. "utf-8") , or return a buffer of no  encoding is provided 

// const readFileExample = async () => {
//     try{
//     const data = await fs.readFile(filepath , "utf-8")
//      console.log(data)

//     }
//     catch(eroor){
//         console.log(error)
//     }
// }
// readFileExample();




// Appending data(update file) : fspromises.appendfile() : adds content to the end of a file . if the file does not exits , it creates a new one,

// syntax : fspromises.appendFile(path , data , options)

//path : the file path to write to 
//options : specifies encoding (e.g. "utf-8") , or return a buffer of no  encoding is provided 


// const appendFileExample = async () => {
//     try{
//     await fs.appendFile(filepath ,"this is the updated data file " , "utf-8")
//         console.log("file updated successfully !!")

//     }
//     catch(error){
//         console.log(error)
//     }
// }
// appendFileExample();





//Deleting a File : fspromises.unlink() : deletes a file by its path
// syntax : fsPromises.unlink(path)


// const deleteFileExample = async () => {
//     try{
//     await fs.unlink(filepath)
//         console.log("file deleted successfully !!")

//     }
//     catch(error){
//         console.log("error deleted file ",error.message)
//     }
// }
// deleteFileExample();