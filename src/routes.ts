import { Router } from 'express';

import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuth } from './middlewares/ensureAuth';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';



const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authUserController = new AuthenticateUserController();
const listSendController = new ListUserSendComplimentsController();
const listReceiveController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post("/session", authUserController.handle)
router.post("/users", createUserController.handle)
router.post("/tags", ensureAuth, ensureAdmin, createTagController.handle)
router.post("/compliments", ensureAuth, createComplimentController.handle)

router.get("/users/compliments/send", ensureAuth, listSendController.handle)
router.get("/users/compliments/receive", ensureAuth, listReceiveController.handle)
router.get("/tags", ensureAuth, listTagsController.handle)
router.get("/users", ensureAuth, listUsersController.handle)

export { router };