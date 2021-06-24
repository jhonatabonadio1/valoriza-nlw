import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

import { ensureAdmin } from './middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authUserController = new AuthenticateUserController();

router.post("/session", authUserController.handle)
router.post("/users", createUserController.handle)
router.post("/tags", ensureAdmin, createTagController.handle)

export { router };