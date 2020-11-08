// Add middlewares for id check (number)
// Add middlewares for schema

const isInteger = (req, res, next) => {
  const { id } = req.params;
  if (!Number.isInteger(parseInt(id))) {
    return res.status(400).json({ status: 400, message: 'Id must be integer' });
  }
  next();
};

const validateFields = (req, res, next) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ status: 400, message: 'Title is missing' });
  }
  
  next();
};

export { isInteger, validateFields };
