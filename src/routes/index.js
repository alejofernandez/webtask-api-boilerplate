'use strict';
/*
 *  Router: loads all api routes
 */
import express        from 'express';
import todosInstaller from './todosInstaller'
/*
  TODO: Import all your route installers here
  ```
    import sampleInstaller from './sampleInstaller'
  ```
*/

export default () => {
  let routes = express.Router();

  routes.use('/todos', todosInstaller());
  /*
    TODO: Mount all your rote installers here
    ```
      routes.use('/sample', sampleInstaller());
    ```
  */

	return routes;
}
