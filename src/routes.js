import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

const apiVersion = '/api/v1/';

routes.get(`${apiVersion}`, (_, res) => res.json('Keep Alive'));

routes.post(`${apiVersion}user`, UserController.store);
routes.put(`${apiVersion}user`, UserController.update);
routes.delete(`${apiVersion}user/:id`, UserController.delete);

export default routes;
