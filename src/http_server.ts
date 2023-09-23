import * as http from 'http';

// TODO(cnpryer)
const demoSchema = {
    name: "TSP",
    body: {
        nodes: {index: "number", values: {from: { index: "number" }, to: { index: "number" }}},
        settings: {
            weights: { isSymmetric: "boolean" },
            resolution: {
            kind: "text",
            start: { index: "number" },
            trip: { values: "unordered_list<{index: 'number'}>"}
            }
        }
    }
}

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  if (req.method === 'GET' && req.url === '/data') {
    res.statusCode = 200;
    res.end(JSON.stringify(demoSchema, null, 2));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(8080);
