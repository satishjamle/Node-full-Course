const http = require("http");
const port = 3000;

// web server
const server = http.createServer((req, res) => {
    if (req.url === "/") {  // Use '===' for comparison
        res.setHeader("content-type", "text/plain");
        res.write("I am Satish Jamle, a full-stack web developer.");
        res.end();
    }
    
    if (req.url === "/About") {  // Use '===' for comparison
        res.write(`We're at the Frog Fiesta. It's a festival for frogs, where the frogs are dancing happily in cowboy boots and clogs. They parade in wide sombreros.`);
        res.end();
    }

    if (req.url === "/contact") {  
        res.setHeader("content-type", "text/html");
        res.write(`<h1>Have a project or want to collaborate </h1>`);
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
