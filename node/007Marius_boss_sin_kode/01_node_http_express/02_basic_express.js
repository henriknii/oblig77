// add express package
import express from 'express';

const PORT = 5000;

// initialize express
const app = express();

// A middleware to handle POST request with JSON data
app.use(express.json());

// basic route using GET method
app.get('/', (req, res) => {
  res.end(); // empty response
  res.status(200).end(); // empty reponse with statuscode
  res.sendStatus(200); // shortcut for the one above
  res.json({ success: true, data: {} }); // send json data
  res.type('json'); // set header to be "Content-Type", "application/json" -> not needed when using res.json()
});

app.get('/route', (req, res) => {
  res.json({ msg: 'Default get', method: req.method });
});

// basic route using GET method and route with params
app.get('/route/:id', (req, res) => {
  const { params } = req; // const params = req.query;
  res.json({ params, method: req.method });
});

// basic route using GET method and query params
app.get('/query', (req, res) => {
  const { query } = req; // const query = req.query;
  res.json({ query, method: req.method });
});

// basic route using POST method and route
app.post('/body', (req, res) => {
  const { body } = req;
  res.json({ body, method: req.method });
});

// basic route using PUT method and route with params
app.put('/route/:id', (req, res) => {
  const { body, params } = req;
  res.json({ body, params, method: req.method });
});

// basic route using PATCH method and route with params
app.patch('/route/:id', (req, res) => {
  const { body, params } = req;
  res.json({ body, params, method: req.method });
});

// basic route using DELETE method and route with params
app.delete('/route/:id', (req, res) => {
  const { body, params } = req;
  res.json({ body, params, method: req.method });
});

// basic route using GET method and redirect
app.get('/redirect', (req, res) => {
  res.redirect(301, '/route'); // redirect with statuscode 301 (default 302)
});

// takes all requests not restricted to any method (unhandled routes)
app.all('*', (req, res, next) => {
  res.status(404).json({
    success: false,
    msg: `${req.originalUrl} route not found`,
  });
  next();
});

// create server
app.listen(PORT, console.log(`Server running on port ${PORT}`));
