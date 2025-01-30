import express from 'express';
import { port } from './env.js';
import path from 'path';  
import exp from 'constants';

const app = express();

//absolute path
 const staticPath = path.join(import.meta.dirname, "public")
app.use(express.static(staticPath));


app.get("/", (req, res) => {
    // const __filename = new URL(import.meta.url).pathname;  // Get the current file's path
    // console.log(__filename);


    // const __dirname = path.dirname(__filename);  // Get the directory name using path.dirname()
    // const homepagePath = path.join(__dirname, 'public', 'index.html');  // Join the path to index.html

    // res.sendFile(homepagePath);  // Send the HTML file
});

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
});
