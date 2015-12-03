'use strict';
/*
 *  Route handler for Todos microservice
 */
import express        from 'express';
import TodoController from '../controllers/TodoController';
import TodoModel      from '../models/TodoModel';
import TodoRepository from '../repositories/TodoRepository';
import TodoService    from '../services/TodoService';

export default () => {
  let route      = express.Router();
  let repository = new TodoRepository({Model: TodoModel});
  let service    = new TodoService   ({repository: repository});
  let controller = new TodoController({Model: TodoModel, service: service});

  route.get   ('/',    controller.getAll);
  route.get   ('/:id', controller.get);
  route.post  ('/',    controller.post);
  route.put   ('/:id', controller.put);
  route.patch ('/:id', controller.patch);
  route.delete('/:id', controller.del);

  return route;
}
