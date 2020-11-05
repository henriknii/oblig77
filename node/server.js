// add express package
import express from 'express';

// middleware used for logging
import morgan from 'morgan';

// use dotenv => need to add .env in root folder (where package.json is)
// custom path => require('dotenv').config({ path: 'path_to_env_file'});
import 'dotenv/config.js';

// route files
import feedbacks from './routes/feedback.js';

// importing from constants and deconstruct it
import { PORT } from './constants/index.js';

// initialize express
const app = express();

if (process.env.NODE_ENV === 'development') {
  // can use different formats (dev, short, tiny)
  app.use(morgan('dev'));
}

// our first middleware to handle POST request with JSON data
app.use(express.json());

// mount router
app.use(`${process.env.BASEURL}/feedbacks`, feedbacks);

// create server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
