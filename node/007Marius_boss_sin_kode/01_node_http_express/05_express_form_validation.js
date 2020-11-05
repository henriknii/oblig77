import express from 'express';
import validator from 'express-validator';

const { check, validationResult, body } = validator;

const app = express();
app.use(express.json());

// A middleware to handle POST request with form data
app.use(express.urlencoded({ extended: false }));

// chain validators and custom errormessage
app.post(
  '/form/password',
  [
    [
      check(
        'password',
        'The password must be 5+ chars long and contain a number'
      )
        .not()
        .isIn(['123', 'password', 'god'])
        .withMessage('Do not use a common word as the password')
        .isLength({ min: 5 })
        .matches(/\d/),
    ],
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return res
      .status(200)
      .json({ success: true, data: { errors, data: req.body.password } });
  }
);

// trim whitespace
// escape <, >, &,',",/
// toInt() => can force a input to be integer
app.post('/form/sanitized', [check('title').trim().escape()], (req, res) => {
  const { title } = req.body;
  res.status(200).json({ success: true, data: title });
});

app.post('/form/un-sanitized', [check('title')], (req, res) => {
  const { title } = req.body;
  res.status(200).json({ success: true, data: title });
});

// use body to check fielddata
app.post('/form/validate-body', [body('username').isEmail()], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  return res
    .status(200)
    .json({ success: true, data: { errors, data: req.body.username } });
});

app.post('/submit', (req, res) => {
  res.status(200).json({ data: { ...req.body } });
});

app.listen(5000, () => {
  console.log('Server is running ...');
});
