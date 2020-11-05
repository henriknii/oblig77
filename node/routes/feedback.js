import express from 'express';
import {
  getFeedbacks,
  getFeedback,
  createFeedback,
  updateFeedback,
  removeFeedback,
  writeJson,
  download,
} from '../controllers/feedback/index.js';
import { isInteger, validateFields } from '../middleware/index.js';

const router = express.Router();

// shorthand adding multiple methods and controllers
// router.route('/').get(getFeedbacks).post(createFeedback);
// router
//   .route('/:id')
//   .get(getFeedback)
//   .put(updateFeedback)
//   .delete(deleteFeedback);

// basic route using GET method with controller method
router.get('/', getFeedbacks);

// basic route using GET method
router.get('/json', writeJson);

// basic router using GET method
router.get('/download', download);

// basic route using GET method and route with params
router.get('/:id', isInteger, getFeedback);

// basic route using POST method and route
router.post('/', validateFields, createFeedback);

// basic route using PUT method and route with params
router.put('/:id', isInteger, updateFeedback);

// basic route using DELETE method and route with params
router.delete('/:id', isInteger, removeFeedback);

export default router;
