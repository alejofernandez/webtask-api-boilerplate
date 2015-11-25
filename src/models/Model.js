'use strict'

import _ from 'lodash';

export default class Model {
  constructor() {
  }

  toRow() {
    return _.omit(this, ['id', 'toRow', 'toSparseRow']);
  }

  toSparseRow() {
    return _.transform(this, (result, value, key) => {
      if (value !== undefined && key !== 'id') result[key] = value;
    });
  }
}
