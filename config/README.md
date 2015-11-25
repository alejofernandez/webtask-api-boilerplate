## How to edit configuration files for setting up secrets and parameters

### Configuration file structure
```javascript
{
  baseUri: '/api',
  secret:  {
    /* your secrets go here */
    MONGO_URL: 'mongodb://localhost:27017/todos'
  },
  param:   {
    /* your configuration parameters go here */
  }
}
```
As a best practice, all methods in controllers, services and repositories receive a `context` object as a first param that represents the `webtaskContext` object. The `context` also resides in `req.webtaskContext`, but is not a good practice to send the `req` to all the layers of your API.

When running locally, context is extracted from configuration files and injected to the `req` object by a middleware.

### Default configuration
Add your shared configuration parameters or secrets in `default.config.js`. Default configuration is merged automatically with `webtask` and `api` configuration.

You can also have different secrets and parameters for running the api locally or in a webtask container.

### Local configuration
* `api.config.js`
The local configuration file has an additional parameter `localPort` to specify the port in which the API will run locally.

### Webtask configuration
* `webtask.config.js`
The webtask configuration file also has an additional parameter `webtaskName` to specify the name that will be used for creating the webtask.
