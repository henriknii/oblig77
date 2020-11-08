import express from 'express';

const app = express();

app.use(express.json());

let posts = [
  {
    id: 1,
    title: 'Title',
  },
];

app.get('/posts', (req, res) => {
  res.status(200).json({
    success: true,
    posts,
  });
});

app.post('/posts', (req, res) => {
  const post = req.body;
  if (Object.entries(post).length > 0) {
    posts = [...posts, post];
  }
  res.status(200).json({
    success: true,
    posts,
  });
});

app.listen(5000, () => {
  console.log('Server is running ...');
});
