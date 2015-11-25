## How to create a repository for storing the domain model

There is a layer of abstraction created on top of MongoDB called `DbCollection` that deals with the communication against MongoDB and works with promises in order to avoid dealing with callbacks.
This `DbCollection` helper class provides promisified access to the following `mongodb.Collection` methods: `find`, `insertOne`, `updateOne` and `deleteOne`.
The connection string is obtained from the `context`, that is passed between layers in every function invocation.

```javascript
import {DbCollection} from './utils';

class MyRepository {
  constructor(Model, collectionName) {
    this.Model      = Model;
    this.collection = new DbCollection(collectionName);
  }

  getAll(context) {
    return this.collection.find(context)
      .then(rows => this.Model.fromRows(rows))
    ;
  }
}
```
