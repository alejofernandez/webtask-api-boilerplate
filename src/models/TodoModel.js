'use strict'

import Model from './Model';

export default class TodoModel extends Model {
  constructor ({_id, id, title, description, done}) {
    this.id          = (_id && _id.toString()) || id;
    this.title       = title;
    this.description = description;
    this.done        = done || false;
  }

  static fromRow (row) {
    return new TodoModel(row);
  }

  static fromRows (rows) {
    return rows.map(row => new TodoModel(row));
  }
}
