import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import errorMiddleware from './middleware/errors.js';

// use dotenv => need to add .env in root folder (where package.json is)
// custom path => require('dotenv').config({ path: 'path_to_env_file'});
import 'dotenv/config.js';

import { PORT } from './constants/index.js';

import connectDatabase from './config/db.js';
import poll from './routes/poll.js';
import user from './routes/user.js';


const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//parse body to json
app.use(express.json());

app.use(cors({
  origin: '*',
  allowedHeaders: ['Content-Type']
}))

app.use(`${process.env.BASEURL}/polls`, cors(), poll);
app.use(`${process.env.BASEURL}/user`, cors(), user);

app.use(errorMiddleware);

connectDatabase();

// create server
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}, ${process.env.BASEURL}`)
);

process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log('Shutting down server due to Unhandled Promise Rejection');
  server.close(() => {
    process.exit(1);
  });
});
