import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { getPosts, getPost, createPost } from './controllers.js';

const PORT = 5000;
const app = express();
app.use(express.json());

app.use(cors({origin: '*',}))
app.use(morgan('dev'));


app.get('/posts', getPosts);
app.get('/posts/:id', getPost);
app.post('/posts', createPost);


app.listen(PORT, () => {
  console.log('Server started ...')
})