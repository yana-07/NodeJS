const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
            <head><title>Greeting</title></head>
            <body>
                <h1>Welcome to my page!</h1>
                <form action="/create-user" method="POST">
                    <input type="text" name="username">
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>`);
        return res.end();
    }
    
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
            <head><title>Users</title></head>
            <body>
                <ul>
                    <li>User1</li>
                    <li>User2</li>
                    <li>User3</li>
                </ul>
            </body>          
        </html>`);
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const bodyStr = Buffer.concat(body).toString();
            const username = bodyStr.split('=')[1];
            console.log(username);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
});

server.listen(3000);