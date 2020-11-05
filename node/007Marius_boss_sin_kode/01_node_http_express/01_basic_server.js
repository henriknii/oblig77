import http from 'http';

const PORT = 5000;

const plates = [
  {
    id: 1,
    plate: 'Frokost',
  },
  {
    id: 2,
    plate: 'Middag',
  },
];

const server = http.createServer((req, res) => {
  // returnHTML(res);
  // returnText(res);
  // readRequestData(req, res);
  // returnJSON(res);
  // returnJSONWithError(res);
  readAndHandleRequestData(req, res);
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

function returnHTML(res) {
  res.setHeader('Content-Type', 'text/html'); // Letting the browser know that HTML is returned
  res.write('<h1>Hello</h1>'); // Writing some HTML
  res.end(); // return the response (default 200)
}

function returnText(res) {
  res.setHeader('Content-Type', 'text/plain'); // setting the header to return plain text (let browser now what content are provided)
  res.write('Bare tekst ...'); // writing text to request
  res.end(); // return the response (default 200)
}

function returnJSON(res) {
  res.setHeader('Content-Type', 'application/json'); // setting the header to return plain text (let browser now what content are provided)
  res.end(
    JSON.stringify({
      success: true, // just for convenience
      data: plates,
    })
  ); // return the response. Must stringify or we get an error (not string og Buffer)
}

function returnJSONWithError(res) {
  res.writeHead(400, {
    'Content-Type': 'application/json',
    'X-Powered-By': 'Whatever',
  }); // a way to set multiple headers and statuscode

  res.end(
    JSON.stringify({
      success: true, // just for convenience
      error: 'Client error',
      data: null,
    })
  ); // return the response. Must stringify or we get an error (not string og Buffer)
}

function readRequestData(req, res) {
  const requestHeaders = { ...req.headers };
  let requestBody = [];
  // When getting request body in normal HTTP module we have to listen to a stream of data
  // When the stream is done we need combine all the "raw" binary data with buffer
  // .toString() on buffer converts it to readable data
  req
    .on('data', (chunk) => {
      requestBody.push(chunk);
    })
    .on('end', () => {
      requestBody = Buffer.concat(requestBody).toString();
      console.log(requestBody);
    });
  console.log(requestHeaders);
}

function readAndHandleRequestData(req, res) {
  const { method, url } = req;
  let requestBody = [];
  req
    .on('data', (chunk) => {
      requestBody.push(chunk);
    })
    .on('end', () => {
      requestBody = Buffer.concat(requestBody).toString();
      res.writeHead(201, {
        'Content-Type': 'application/json',
        'X-Powered-By': 'Whatever',
      });

      if (method === 'POST' && url === '/plates') {
        plates.push(JSON.parse(requestBody));
      }

      res.end(
        JSON.stringify({
          success: true,
          data: plates,
        })
      );
    });
}
