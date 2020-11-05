import feedbacks from '../../data/feedbacks.js';
import * as utils from '../../utils/helpers.js';

const list = () => {
  if (feedbacks.size === 0) {
    return { status: 200, data: 'No feedbacks' };
  }
  return { status: 200, data: Object.fromEntries(feedbacks) };
};

const get = (id) => {
  const feedbackItem = utils.findId(feedbacks, id);
  if (feedbackItem.error) return feedbackItem;
  return { status: 200, data: feedbacks.get(id) };
};

const create = (feedback) => {
  const { ...data } = feedback;
  if (!data) {
    return { status: 200, data: 'No feedback created' };
  }
  const newId = utils.createId(feedbacks);
  feedbacks.set(newId, data);
  return { status: 200, data: Object.fromEntries(feedbacks) };
};

const update = (feedback) => {
  const { id, ...data } = feedback;
  const feedbackItem = utils.findId(feedbacks, id);
  if (feedbackItem.error) return feedbackItem;
  feedbacks.set(id, data);
  return { status: 200, data: feedbacks.get(id) };
};

const remove = (id) => {
  const feedbackItem = utils.findId(feedbacks, id);
  if (feedbackItem.error) return feedbackItem;
  feedbacks.delete(id);
  return { status: 200, data: true };
};

const toJson = () => {
  const file = utils.writeJson('file2.json', [...feedbacks]);
  if (file && file.error) return file;
  return { status: 200, data: 'File saved' };
};

export { list, get, create, update, remove, toJson };
