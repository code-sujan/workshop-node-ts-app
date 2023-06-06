import express from "express"
import UserController from "../src/controllers/UserController";
const router = express.Router();
router.get('/', UserController.Index);
router.post('/', UserController.New);

export default router;