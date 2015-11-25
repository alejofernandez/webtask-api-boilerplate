'use strict';
/*
 *  Boilerplate: This file mounts all routes and middlewares to the baseUri of the api (do not modify)
 *
 *  Extension should be defined defined in /routes and /middlewares
 *
 */
import express     from 'express';
import routes      from './routes';
import middlewares from './middlewares';

export default (config) => {
	let api = express.Router();

	// Middlewares
  api.use(config.baseUri || '/', middlewares());

  // Routes
  api.use(config.baseUri || '/', routes());

	return api;
}
