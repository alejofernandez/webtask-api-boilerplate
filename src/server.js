'use strict';
/*
 *  Boilerplate: This file injects the configuration and runs the api locally (do not modify)
 */
import _             from 'lodash';
import api           from './api';
import apiConfig     from '../config/api.config';
import defaultConfig from '../config/default.config';
import express       from 'express';
import http          from 'http';

let app    = express();
let config = _.merge(defaultConfig(), apiConfig());

// inject context into all requests when running locally
app.use(function (req, res, next) {
  req.webtaskContext = {data: _.assign(config.param, config.secret, {policies: config.policies})};
  next();
})

app.use('/', api(config));

console.log('Listening on port ' + config.localPort);
app.server = http.createServer(app);
app.server.listen(config.localPort);
