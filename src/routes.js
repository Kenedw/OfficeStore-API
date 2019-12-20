import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

const apiVersion = '/api/v1/';

routes.get(`${apiVersion}`, (_, res) => res.json('Keep Alive'));
routes.post(`${apiVersion}sessions`, SessionController.store);

routes.use(authMiddleware);

routes.post(`${apiVersion}user`, UserController.store);
routes.put(`${apiVersion}user`, UserController.update);
routes.delete(`${apiVersion}user`, UserController.delete);

export default routes;
