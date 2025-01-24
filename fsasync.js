//fs.writefile() : writes data to a file , replacing the file if it already exists

// syntax : fs. writefile(path ,data , options, callback)
//path: file path to write to
// data: content to write
// Options: optional.specifies encoding(utf-8) ,mode or flag
// callback : a function with an err parameter

// const fs = require("fs")
// const path = require("path")


// const fileName = "fsAsycn.txt"
// const filepath = path.join(__dirname , fileName) 


// fs.writeFile(filepath ,"This is  the initial data", "utf-8" , (err)=>{
//     if(err) console.error(err)
//     else console.log("file has been saved")
// })





// fs.readflie(): reads the contents of a file asynchronously and returns the data as a buffer or string
// syntax : fs.readfile(path, options, callback)
// path : file path to read from
// options an abject or string specifying the encoding (utf-8) or flag("r" for reading)
// callback : a function with parameters (err, data).

// fs.readFile(filepath ,"utf-8" , (err ,data)=>{
//     if(err) console.error(err)
//     else console.log(data)
// })



//fs.appendfile() : appends data to a file, if thr file doesn't exist it is created
// syntax : fs.appendFile(path, data , options, callback)

// fs.appendFile(filepath ,"\n this is the updated data " ,"utf-8" , (err)=>{
//     if(err) console.error(err)
//     else console.log("file has been updated")
// })


//fs,unlink : deletes a file asynchronous
// syntax : fs.unlink(path,callback)

// fs.unlink(filepath , (err)=>{
//     if(err) console.error(err)
//     else console.log("file has been deleted")
// })

