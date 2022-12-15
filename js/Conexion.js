const http = requiere('http');

const server = http.createServer((req, res) => {
    res.end('Hello world')
})

app.get('/', (req, res) => res.send('Hello world with express !'))

server.listen(3000);
console.log('Server on port 3000')