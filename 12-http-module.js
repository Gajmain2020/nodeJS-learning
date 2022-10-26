const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("here is the about section");
  }
  res.end(`
  <h1>OOPS!!!</h1>
  <p>Page not found which you are looking for</p>
  <a href="/">home page</a>
  `);
});

server.listen(5000);
