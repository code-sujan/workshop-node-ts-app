import express from 'express';
import StudentController from '../src/controllers/StudentController';

const router = express.Router();
router.get('/', StudentController.Index);
router.post('/', StudentController.New);
router.get('/:id/books', StudentController.Books);
router.post('/:id/books/', StudentController.AssignBook);
router.patch('/:id/books/:bookId', StudentController.Return);

export default router;
