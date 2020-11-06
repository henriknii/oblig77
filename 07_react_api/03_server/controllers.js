import {
  list,
  create,
  get,
} from './models.js';

export const getPosts = (req, res, next) => {
  const { status, data } = list();
  res.status(status).json({ status, data });
};

export const getPost = (req, res, next) => {
  const { id } = req.params;
  const { status, error, data } = get(id);
  res.status(status).json({
    status,
    error,
    data,
  });
};
export const createPost = (req, res, next) => {
  const { values: {title, content} } = req.body;
  const { status, data } = create({ title, content });
  res.status(status).json({
    status,
    data,
  });
};




