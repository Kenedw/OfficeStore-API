import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middleware/auth';
import ItemController from './app/controllers/ItemController';

const routes = new Router();

const apiVersion = '/api/v1/';

routes.get(`${apiVersion}`, (_, res) => res.json('Keep Alive'));
routes.post(`${apiVersion}auth/sign_in`, SessionController.store);

routes.get(`${apiVersion}user/:id`, UserController.index);
routes.post(`${apiVersion}user`, UserController.store);

routes.use(authMiddleware);

routes.put(`${apiVersion}user`, UserController.update);
routes.delete(`${apiVersion}user`, UserController.delete);

routes.get(`${apiVersion}item`, ItemController.index);
routes.post(`${apiVersion}item`, ItemController.store);
routes.put(`${apiVersion}item/:itemid`, ItemController.update);
routes.delete(`${apiVersion}item/:itemid`, ItemController.delete);

export default routes;
