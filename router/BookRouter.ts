import express from 'express';
import BookController from '../src/controllers/BookController';

const router = express.Router();
router.get('/', BookController.Index);
router.post('/', BookController.New);
router.put('/:id', BookController.Edit);
router.delete('/:id', BookController.Delete);

export default router;
