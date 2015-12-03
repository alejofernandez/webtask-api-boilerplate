'use strict';
import {DbCollection} from './utils';

export default class Repository {
  constructor (Model, collectionName) {
    this.Model      = Model;
    this.collection = new DbCollection(collectionName);
  }

  getAll (context) {
    return this.collection.find(context)
      .then(rows => this.Model.fromRows(rows))
    ;
  }

  get (context, id) {
    return this.collection.findById(context, id)
      .then(row => this.Model.fromRow(row))
    ;
  }

  post (context, model) {
    return this.collection.insertOne(context, model.toRow())
      .then(row => this.Model.fromRow(row))
    ;
  }

  put (context, id, model) {
    return this.collection.updateOne(context, id, model.toRow())
      .then(row => this.Model.fromRow(row))
    ;
  }

  patch (context, id, model) {
    return this.collection.updateOne(context, id, model.toSparseRow())
      .then(row => this.Model.fromRow(row))
    ;
  }

  del (context, id) {
    return this.collection.deleteOne(context, id);
  }
}
