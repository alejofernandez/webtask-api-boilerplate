'use strict'
/*
 *  resourceHandler: maps a promise based handler into an express handler
 */
function resourceHandler(handler, successStatusCode = 200) {
  return (req, res) => {
    handler(req.webtaskContext, req, res)
      .then (response => res.status(successStatusCode)  .json(response))
      .catch(error    => res.status(error.status || 500).json({error: error}))
    ;
  }
}

/*
 *  CollectionController: defines all methods for a collection type resource
 */
class CollectionController {
  constructor (service, Model, {getAll, get, post, put, patch, del}) {
    if (getAll) {this.getAll = resourceHandler((context)      => service.getAll(context))}
    if (get)    {this.get    = resourceHandler((context, req) => service.get   (context, req.params.id))}
    if (post)   {this.post   = resourceHandler((context, req) => service.post  (context, new Model(req.body)))}
    if (put)    {this.put    = resourceHandler((context, req) => service.put   (context, req.params.id, new Model(req.body)))}
    if (patch)  {this.patch  = resourceHandler((context, req) => service.patch (context, req.params.id, new Model(req.body)))}
    if (del)    {this.del    = resourceHandler((context, req) => service.del   (context, req.params.id))}
  }
}

/*
 *  CollectionTypes: defines common methods pattern for a collection controller
 */
class CollectionTypes {
  static readWrite () {
    return {
      getAll: true,
      get:    true,
      post:   true,
      put:    true,
      patch:  true,
      del:    true
    }
  }

  static readOnly () {
    return {
      getAll: true,
      get:    true
    }
  }
}

export default {resourceHandler: resourceHandler, CollectionController: CollectionController, CollectionTypes: CollectionTypes};
