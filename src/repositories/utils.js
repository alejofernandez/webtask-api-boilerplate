'use strict';
import mongodb from 'mongodb';
import Promise from 'bluebird';

var Collection  = mongodb.Collection;
var MongoClient = mongodb.MongoClient;
var ObjectID    = mongodb.ObjectID;

Promise.promisifyAll(Collection.prototype);
Promise.promisifyAll(MongoClient);

function toObjectId(id) {
  return ObjectID.createFromHexString(id);
}

class DbConnection {
  constructor(context) {
    this.context = context;
  }

  connect() {
    return MongoClient.connectAsync(this.context.data.MONGO_URL);
  }
}

class DbCollection {
  constructor(collectionName) {
    this.collectionName = collectionName;
  }

  collection(context) {
    return new DbConnection(context).connect()
      .then(db => db.collection(this.collectionName))
    ;
  }

  findById(context, id) {
    return this.find(context, {_id: toObjectId(id)})
      .then(result => result[0])
    ;
  }

  find(context, filter) {
    return new Promise((resolve, reject) => {
      this.collection(context)
        .then(collection => collection.findAsync(filter || {}))
        .then(cursor     => cursor.toArray((err, rows) => err ? reject(err) : resolve(rows)))
      ;
    });
  }

  insertOne(context, row) {
    return this.collection(context)
      .then(collection => collection.insertOneAsync(row))
      .then(result     => result.ops[0])
    ;
  }

  updateOne(context, id, changes) {
    return this.collection(context)
      .then(collection => collection.updateOneAsync({_id: toObjectId(id)}, {$set: changes}))
      .then(()         => this.findById(context, id))
    ;
  }

  deleteOne(context, id) {
    return this.collection(context)
      .then(collection => collection.deleteOneAsync({_id: toObjectId(id)}))
      .then(()         => null)
    ;
  }
}

export default {DbConnection: DbConnection, DbCollection: DbCollection, toObjectId: toObjectId};
