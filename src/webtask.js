'use strict';
/*
 *  Boilerplate: This file returns the api wrapped as a webtask (do not modify)
 */
import api           from './api';
import express       from 'express';
import webtaskConfig from '../config//webtask.config';
import Webtask       from 'webtask-tools';

let app = express();
let config = webtaskConfig();

app.use('/', api(config));

export default Webtask.fromExpress(app);
