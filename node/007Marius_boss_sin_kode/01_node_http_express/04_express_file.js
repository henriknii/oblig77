import express from 'express';

const app = express();

app.get('/file', (req, res) => res.download('./file/test.txt'));

app.listen(5000, () => {
  console.log('Server is running ...');
});
