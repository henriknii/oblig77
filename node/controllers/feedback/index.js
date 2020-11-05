import {
  list,
  create,
  get,
  update,
  remove,
  toJson,
} from '../../models/feedback/index.js';

import * as utils from '../../utils/helpers.js';

/**
 *
 * @param {*} req Get the request object
 * @param {*} res Send the response object
 * @param {*} next Proceed with other handlers
 * @desc Get all feedbacks
 * @route GET DEFAULT_ROUTE/feedbacks
 * @access Public
 *
 */
export const getFeedbacks = (req, res, next) => {
  const { error, status, data } = list();
  res.status(status).json({ status, error, data });
};

/**
 *
 * @desc Get single feedback by id
 * @route GET DEFAULT_ROUTE/feedbacks/:id
 * @access Public
 *
 */
export const getFeedback = async (req, res, next) => {
  const { id } = req.params;
  const { status, data, error } = await get(id);
  res.status(status).json({
    status,
    error,
    data,
    params: id,
  });
};

/**
 *
 * @desc Create single feedback
 * @route GET DEFAULT_ROUTE/feedbacks
 * @access Public
 *
 */
export const createFeedback = (req, res, next) => {
  const { id, ...feedback } = req.body;
  const { status, error, data } = create({ id, ...feedback });
  res.status(status).json({
    status,
    error,
    data,
  });
};

/**
 *
 * @desc Update single feedback
 * @route GET DEFAULT_ROUTE/feedbacks/:id
 * @access Public
 *
 */
export const updateFeedback = (req, res, next) => {
  const { id } = req.params;
  const { ...feedback } = req.body;
  const { status, error, data } = update({ id, ...feedback });
  res.status(status).json({
    status,
    data,
    error,
    params: id,
  });
};

/**
 *
 * @desc Delete single feedback
 * @route GET DEFAULT_ROUTE/feedbacks/:id
 * @access Public
 *
 */
export const removeFeedback = (req, res, next) => {
  const { id } = req.params;
  const { status, data, error } = remove(id);
  res.status(status).json({
    status,
    data,
    error,
    params: req.params.id,
  });
};

export const writeJson = (req, res, next) => {
  const { status, data, error } = toJson();
  res.status(status).json({
    status,
    data,
    error,
  });
};

export const download = (req, res, next) => {
  const filename = 'file2.json';
  const { status, error } = utils.fileExist(filename);
  if (error) {
    res.status(status).json({
      status,
      error,
    });
  }
  res.download(filename);
};
