import { createServer } from 'http';  // Built-in HTTP module
import { readFile } from 'fs/promises';
import path from 'path';

const port = 80;

const serverFile = async (res, filepath, contentType) => {
    try {
        const data = await readFile(filepath);
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (error) {
        res.writeHead(404, { 'Content-Type': 'content/plain' });
        res.end('404 Page Not Found');
    }
}

const server = createServer(async (req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            return serverFile(res, path.join("public", "index.html"), "text/html");
        } else if (req.url === "/style.css") {
            return serverFile(res, path.join("public", "style.css"), "text/css");
        }
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//

//https://youtu.be/LRMoFTGql9g?feature=shared
