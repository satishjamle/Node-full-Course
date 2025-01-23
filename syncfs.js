// syntax : fs.writefileSync (filepath, data, options)
//filepath : the filre pathl to write to 
// data : the content to write to the file
// options : the  Optional.Includes encoding ('utf8') ,mode ,or flags

// const fs = require("fs")
// const path = require("path")


// const fileName = "test.txt";
// const filepath = path.join(__dirname,fileName); 
// console.log(__dirname);

//  const writeFile = fs.writeFileSync(
//     filepath,
//     "THIS IS THE INITIAL DATA",
//     "utf-8"

//     );
//     console.log(writeFile);

//fs.readfileSync(): reads a file's content and returns it as a string of buffer




// filrpath
//fs.appendflieSync : appends data to a file if the file does not exist i creates the file
// const fs = require("fs");
// const path = require("path");

// const fileName = "test.txt";
// const filepath = path.join(__dirname, fileName);

// // Corrected: fs.readFileSync
// const readFile = fs.readFileSync(filepath, 'utf-8');

// console.log(readFile.toString());






//fs.appendflieSync : appends data to a file if the file does not exist i creates the file

// const appendFlie = fs.appendFileSync(
//     filepath,
//     "THIS IS THE UPDATED DATA",
//     "utf-8"

// );
// console.log(appendFlie);





//Delete file(fs.unlinkSync()) : deletes a file by its path
//syntax : fs.unlinkSync(flepath)
// the path of the file to delete

// const fileDelete = fs.unlinkSync(filepath)
// console.log(fileDelete)




//Rename file(fs.renameSync) : Renames a filel from one naem to another
// syntax  : fs.renameSync(oldpath, newpath)
// oldpath : current file path
// newpath : new file path or name

// const newUpdatedFileName = "updateText.txt"
// const newFilepath = path.join(__dirname ,newUpdatedFileName)

// const renameFile = fs.renameSync(filepath , newFilepath)
// console.log(renameFile)
