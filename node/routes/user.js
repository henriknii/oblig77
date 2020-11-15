import express from 'express';
import {userController} from '../controllers/index.js';
import { isInteger, validateFields } from '../middleware/index.js';

const router = express.Router();

router.get('/:id',validateFields,userController.get);
router.get('/',validateFields, userController.list);
router.post('/',validateFields, userController.create);
router.put('/:id',validateFields, userController.update);
router.delete('/:id',validateFields, userController.remove);

export default router;
