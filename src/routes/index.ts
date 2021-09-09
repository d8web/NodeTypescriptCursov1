import { Router } from 'express';

import { Home } from '../controllers/homeController';
import { Contact, TestFunction, About } from '../controllers/infoController';
import { AgeUser, ScreenAddUser, AddUserAction, EditUserScreen, EditUserAction, DeleteUser } from '../controllers/userController';

const router = Router();

router.get('/', Home);
router.get('/sobre', About);

router.get('/teste', TestFunction);

router.get('/contato', Contact);
router.post('/contato-res', AgeUser);

router.get('/user', ScreenAddUser);
router.post('/useradd', AddUserAction);

router.get('/editar/:id', EditUserScreen);
router.post('/useredit', EditUserAction);

router.get('/delete/:id', DeleteUser);

export default router;