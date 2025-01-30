import express from 'express';
import { port } from './env.js';
import path from 'path';
import exp from 'constants';


const app = express();



//absolute path
const staticPath = path.join(import.meta.dirname, "public")
app.use(express.static(staticPath));


app.get ("/product", (req,res) => {
    console.log(req.query);

    // res.send(`<h1> User search for product  ${req.query.search}</h1>`)



    //access multiple query and pages

    res.send(`<h1> User search for product  ${req.query.page} ${req.query.limit} mobile</h1>`)

})


app.get("/profile/:username" , (req,res) => {
    console.log(req.params);
    res.send(`<h1>my name is ${req.params.username}</h1>`)
});


app.get("/profile/:username/artical/:slug" , (req,res) => {
    console.log(req.params);
    const formatedSlug = req.params.slug.replace(/-/g, "");
    res.send(`<h1> Article ${req.params.username} by ${formatedSlug}</h1>`)
})


app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
});

