## webtask-api-boilerplate

This is a very simple project to demo how to build an API and bundle it in a single file using `webpack` and deploy it to a `webtask.io`.

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

### How to hack this repo
1. Edit your configuration files for setting up secrets and parameters.
2. Create a route installer for your API and define all routes you want to implement.
3. Create a controller for your handling your routes.
4. Create a service for implementing your business logic.
5. Test/debug your api locally.
6. Deploy your api to `webtask.io`
5. Create a repository for storing the domain model.
