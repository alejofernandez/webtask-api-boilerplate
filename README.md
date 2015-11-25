## webtask-api-boilerplate

This is a very simple seed/skeleton project to demo how to build an API and bundle it in a single file using `webpack` and deploy it to a `webtask.io`.

### Install global modules
1. `npm install -g gulp`
2. `npm install -g wt-cli`
3. `wt init`

### Install local modules
1. `npm install`

### To run the API locally
1. `gulp run`
  or
2. `gulp debug`

### To deploy the API as a webtask
1. `gulp deployWebtask`

This boilerplate has an ES6 babel loader, API source code was written using ES6 and it uses MongoDb as repository.

### Opinionated API design
The API skeleton follows the guidelines described by [DDD](https://en.wikipedia.org/wiki/Domain-driven_design), the communication flow between different components is:
```
{Http Request} => [Controller] => [Service] => [Repository] => {database}
```

### Layer responsibilities in this API
* Controller: handles http methods dispatching operations to the service layer and it does the translation between requests/responses and domain model entities.
* Service: implements the business logic of the domain model.
* Repository: handles the persistency of the domain model.

### How to hack this repo
1. [Edit your configuration files for setting up secrets and parameters.](tree/master/config)
2. [Create a route installers for your API and define all routes you want to implement.](tree/master/src/routes)
3. [Create a controller for your handling your routes.](tree/master/src/controllers)
4. [Create a service for implementing your business logic.](tree/master/src/services)
5. [Create a repository for storing the domain model.](tree/master/src/services)
6. TBD: Add unit tests for your controllers and services.
7. TBD: Add integration tests for your repositories.
8. [Test/debug your api locally.](..blob/master/src/running-locally.md)
9. [Deploy your api to `webtask.io`.](..blob/master/src/working-with-webtasks.md)

### Roadmap
* Add tests and a gulp task for running them and a configuration for tests
* Use `wt` as a library instead of as a command line tool
* Add an auto reload task for local development
* Add an auto re-deploy task and stream logs to the console for 100% remote development
* Validate required modules against `https://tehsis.github.io/webtaskio-canirequire/` as a part of the build
* Refactor the `gulpfile` into different plugins for future publishing
