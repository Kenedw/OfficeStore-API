import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

const apiVersion = '/api/v1/';

routes.post(`${apiVersion}user`, UserController.store);

export default routes;
