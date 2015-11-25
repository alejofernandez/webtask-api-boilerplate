'use strict';
import _             from 'lodash'
import defaultConfig from './default.config.js'
/*
 *  Boilerplate: This configuration file will be sent to the Webstask runtime (merged with the default configuration) when creating the webtask
 *
 *  All secrets should go under the `secret` section, the rest of configuration params should go under `params`
 *
 */
let config = {
  webtaskName: 'todo-microservice',
  secret:      {
    MONGO_URL: 'mongodb://todos-api:Otw8p61kJUc03LltbW2jOIpyDU37S4DYAZhZDuNh@ds057954.mongolab.com:57954/todos'
  },
  param:       {
  }
};

export default () => (_.merge(defaultConfig(), config));
