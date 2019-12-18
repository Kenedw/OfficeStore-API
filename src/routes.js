import { Router } from 'express';

const routes = new Router();

routes.get('/', (_, res) => res.send('<h1>OfficeStore API</h1>'));

export default routes;
