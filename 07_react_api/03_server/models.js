import posts from './db.js'

export const list = () => {
  return { status: 200, data: Object.fromEntries(posts) };
};

export const get = (id) => {
  if(!posts.get(id)) return {status: 404, error: "ID not found"}
  return { status: 200, data: posts.get(id) };
};

export const create = (postData) => {
  posts.set(posts.size.toString(), {...postData});
  return { status: 200, data: Object.fromEntries(posts) };
};