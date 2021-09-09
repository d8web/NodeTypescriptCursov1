import { Router } from 'express';

import { Home } from '../controllers/homeController';
import { Contact, TestFunction, About } from '../controllers/infoController';
import { AgeUser, ScreenAddUser, AddUserAction } from '../controllers/userController';

const router = Router();

router.get('/', Home);
router.get('/sobre', About);

router.get('/teste', TestFunction);

router.get('/contato', Contact);
router.post('/contato-res', AgeUser);

router.get('/user', ScreenAddUser);
router.post('/useradd', AddUserAction);

export default router;