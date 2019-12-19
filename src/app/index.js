import express from 'express';
import compression from 'compression';
import Youch from 'youch';
import timeout from 'connect-timeout';

import routes from '../routes';

import '../database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.exceptionHandler();
    this.haltOnTimedout();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(compression());
    this.server.use(timeout(60000));
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, _next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();

        return res.status(500).json(errors);
      }
      return res.status(500).json({ error: 'Internal server error' });
    });
  }

  // handle for timeout
  haltOnTimedout() {
    this.server.use(async (err, req, res, next) => {
      if (req.timedout) {
        return res.status(504).json({ error: 'Conection Timeout' });
      }
      next();
    });
  }
}

export default new App().server;
