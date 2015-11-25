## How to create services for implementing business logic

This is a simple implementation of a service that implements a CRUD business logic for a REST API resource:
```javascript
class TodoService {
  constructor({repository}) {
    this.repository = repository;
  }

  getAll(context) {
    return this.repository.getAll(context);
  }

  get(context, id) {
    return this.repository.get(context, id);
  }

  post(context, todo) {
    return this.repository.post(context, todo);
  }

  put(context, id, todo) {
    return this.repository.put(context, id, todo);
  }

  patch(context, id, todo) {
    return this.repository.patch(context, id, todo);
  }

  del(context, id, todo) {
    return this.repository.del(context, id);
  }
}
```
