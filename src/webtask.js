'use strict';
/*
 *  Boilerplate: This file returns the api wrapped as a webtask (do not modify)
 */
import _             from 'lodash';
import api           from './api';
import defaultConfig from '../config/default.config';
import express       from 'express';
import webtaskConfig from '../config//webtask.config';
import Webtask       from 'webtask-tools';

let app = express();
app.use('/', api(_.merge(defaultConfig(), webtaskConfig())));

export default Webtask.fromExpress(app);
