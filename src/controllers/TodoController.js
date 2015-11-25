'use strict';
/*
 *  TodoController: an implementation of a collection controller
 */
import {CollectionController, CollectionTypes} from './utils'

export default class TodoController extends CollectionController {
  constructor({service, Model}) {
    super(service, Model, CollectionTypes.readWrite());
  }
}
