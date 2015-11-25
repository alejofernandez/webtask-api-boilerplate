## How to create a controller

Controllers should expose standard `expressjs` route handler functions:
```javascript
(req, res) => res.json({message:'hello world'})
```

There is a helper function in `utils.js` module called `resourceHandler` that allows to use a promise based handler with the following signature:
```javascript
(context, req) => Promise.resolve({message:'hello world'})
```
where `context` represents `req.webtaskContext`.

Example usage:
```javascript
class CollectionController {
  constructor(service) {
    this.get = resourceHandler((context, req) => service.get(context, req.params.id));
  }
}
```

There is also another helper in `utils.js` module called `CollectionController` that implements methods for REST collection type resources.
It can be used in conjunction with the `CollectionTypes` helper to build pre-configured types of collections (based on the implemented http methods).

Example usage:
```javascript
import {CollectionController, CollectionTypes} from './utils'

class TodoController extends CollectionController {
  constructor({service, Model}) {
    super(service, Model, CollectionTypes.readWrite());
  }
}
```
