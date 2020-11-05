// add express package
import express from 'express';

const PORT = 5000;

// initialize express
const app = express();

// custom global middleware
const customMiddleware = (req, res, next) => {
  console.log(req.path);
  req.custom = 'Added as middleware';
  next(); // if next is removed then the server will stop at this point
};

// add global custom middleware
app.use(customMiddleware);

const myCustomMiddleware = (req, res, next) => {
  const [, basePath, endPath] = req.path.split('/');
  const isAdmin = endPath === 'admin';

  if (basePath === 'secret' && !isAdmin) {
    return res.status(403).json({ success: false, msg: 'You are not allowed' });
  }
  next(); // continue with other handlers
};

// Accesses "custom" added to the request object through middleware
app.get('/', (req, res, next) => {
  res.status(200).json({ custom: req.custom });
});

// basic route using GET method and REGEX route and custom middleware
app.get(/secret/, myCustomMiddleware, (req, res) => {
  res.json({ msg: 'Using som custom middleware' });
});

// create server
app.listen(PORT, console.log(`Server running on port ${PORT}`));
