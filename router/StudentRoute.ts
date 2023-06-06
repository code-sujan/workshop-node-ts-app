import express from 'express';
import StudentController from '../src/controllers/StudentController';

const router = express.Router();
router.get('/', StudentController.Index);
router.post('/', StudentController.New);

export default router;
