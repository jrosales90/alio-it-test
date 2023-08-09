import express from 'express';
import { registerUserHandler } from '../controllers/user.controller';
import { validate } from '../middleware/validate';
import { createUserSchema } from '../schemas/user.schema';


const router = express.Router();

router.post('/register', validate(createUserSchema), registerUserHandler);

export default router;