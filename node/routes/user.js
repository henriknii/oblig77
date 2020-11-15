import express from 'express';
import {userController} from '../controllers/index.js';
import { isInteger, validateFields } from '../middleware/index.js';

const router = express.Router();

router.get('/:userid',userController.get);
router.get('/', userController.list);
router.post('/', userController.create);
router.put('/:userid', userController.update);
router.delete('/:userid', userController.remove);

export default router;
