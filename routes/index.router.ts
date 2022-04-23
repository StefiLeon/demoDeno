import { Router } from "https://deno.land/x/oak@v10.5.1/mod.ts";
import * as usersController from '../controllers/index.controllers.ts';

const router = new Router();

router.get('/', usersController.getAllUsers);
router.get('/users', usersController.getQuery);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.saveUser);

export default router;