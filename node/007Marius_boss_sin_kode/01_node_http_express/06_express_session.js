import express from 'express';
import session from 'express-session';

const app = express();

app.use(
  session({
    secret: 'secret', // required
    saveUninitialized: false, // creates a new session unless the session is a modified one ++ (se docs)
    resave: false, // does not force the session to be resaved unless it has been modified,
  })
);

app.get('/session', function (req, res) {
  if (req.session.views) {
    req.session.views += 1;
    res.setHeader('Content-Type', 'text/html');
    res.write(`<p>views: ${req.session.views}</p>`);
    res.end();
  } else {
    req.session.views = 1;
    res.end(
      'testing sessions - please refresh - you can watch application to see a cookie has been added'
    );
  }
});

app.get('/cookie', (req, res) => {
  const username = 'user';
  res.cookie('user', username, {
    expires: new Date(Date.now() + 900000),
    httpOnly: true,
    secure: false,
  }); // set cookie with a name, value, date, httpOnly (cookie on only available by the web server), only allowed when https
  res.end();
});

app.get('/clear-cookie', (req, res) => {
  res.clearCookie('user'); // clear cookie
  res.end();
});

app.listen(5000, () => {
  console.log('Server is running ...');
});
