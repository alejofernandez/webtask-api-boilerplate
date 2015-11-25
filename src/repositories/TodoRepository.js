import Repository from './Repository';

export default class TodoRepository extends Repository {
  constructor({Model}) {
    super(Model, 'todos');
  }
}
