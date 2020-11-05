import fs from 'fs';

const createId = (map) => (map.size > 0 ? map.size + 1 : 1).toString();

const findId = (map, id) => {
  const feedback = map.get(id);
  if (!feedback) return { status: 404, error: 'Id not found' };
  return feedback;
};

const fileExist = (filename) => {
  const path = `./${filename}`;
  if (fs.existsSync(path)) {
    return { status: 200 };
  }
  return { status: 400, error: 'Could not locate file' };
};

const writeJson = (filename, content) => {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
    if (err) {
      return { status: 400, error: 'Could not save file' };
    }
  });
};
export { createId, findId, fileExist, writeJson };
