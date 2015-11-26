## Working with webtasks

### Building a webstask script containing your api in a single bundle
* `gulp buildWebtask`

Bundle script file with the api ready to deploy to webtask.io will be generated at `./build/webtask.js`.
Bundle configuration file will be generated at `./build/webtask.config.js`.

### Deploying your webtask
* `gulp deployWebtask`

Please make sure to have `wt-cli` installed.

![deploy](https://cloud.githubusercontent.com/assets/1288192/11413849/dbc4d0d8-93cc-11e5-8662-6042d6ed58ac.gif)
