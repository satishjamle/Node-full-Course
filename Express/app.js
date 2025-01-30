import express from "express";
import {port} from "./Env.js";

const app = express()


app.get('/', (req, res) => {
  res.send(<h1>hello  home page !! </h1>)
})
app.get('/about', (req, res) => {
  res.send(<h1> Hello about page !! </h1>)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})