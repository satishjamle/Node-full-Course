// import express from 'express';
// import { port } from './env.js';
// import path from 'path';  
// import exp from 'constants';

// const app = express();

// //absolute path
//  const staticPath = path.join(import.meta.dirname, "public")
// app.use(express.static(staticPath));


// app.get("/", (req, res) => {
//     // const __filename = new URL(import.meta.url).pathname;  // Get the current file's path
//     // console.log(__filename);


//     // const __dirname = path.dirname(__filename);  // Get the directory name using path.dirname()
//     // const homepagePath = path.join(__dirname, 'public', 'index.html');  // Join the path to index.html

//     // res.sendFile(homepagePath);  // Send the HTML file
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port: ${port}`);
// });





// es module in nodejs Caveats __dirname & __filename

// import express from 'express';
// import { port } from './env.js';
// import path from 'path';
// import exp from 'constants';


// const app = express();

// //es modues 
// console.log(import.meta.dirname);
// console.log(import.meta.filename);

// //absolute path
// const staticPath = path.join(import.meta.dirname, "public")
// app.use(express.static(staticPath));


// app.listen(port, () => {
//     console.log(`Example app listening on port: ${port}`);
// });






// Dynamic Routes url params

import express from 'express';
import { port } from './env.js';
import path from 'path';
import exp from 'constants';


const app = express();



//absolute path
const staticPath = path.join(import.meta.dirname, "public")
app.use(express.static(staticPath));

app.get("/profile/:username" , (req,res) => {
    console.log(req.params);
    // res.send("hiii ")
    res.send(`<h1>my name is ${req.params.username}</h1>`)
});

// dynamic value ko get krna with the help of params 

app.get("/profile/:username/artical/slug" , (req,res) => {
    console.log(req.params);
    const formatedSlug = req.params.slug.replace(/-/g, "");
    res.send(`<h1> Article ${req.params.username} by ${formatedSlug}</h1>`)
})


app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
});

