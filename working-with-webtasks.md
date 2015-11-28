## Working with webtasks

### Building a webstask script containing your api in a single bundle
* `gulp buildWebtask`

Bundle script file with the api ready to deploy to webtask.io will be generated at `./build/webtask.js`.
Bundle configuration file will be generated at `./build/webtask.config.js`.

### Deploying your webtask

Make sure you have `wt-cli` installed and that your `webtask` token is already configured in `./config/webtask.config.js`.

* `npm install -g wt-cli`
* `wt init` => then follow instructions
* `wt profile get default` => copy the token

<img width="450" alt="default profile" src="https://cloud.githubusercontent.com/assets/1288192/11450091/13a63444-956f-11e5-8f8a-7d811d507fba.png">

* open `./config/webtask.config.js` and configure the `webtaskToken` property with your token

Then run:
* `gulp deployWebtask`

![deploy](https://cloud.githubusercontent.com/assets/1288192/11413849/dbc4d0d8-93cc-11e5-8662-6042d6ed58ac.gif)
