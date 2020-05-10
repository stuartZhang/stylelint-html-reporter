# stylelint-html-reporter-stzhang

HTML reporter for stylelint

## Installation

```shell
npm install --save-dev stylelint-html-reporter-stzhang
```

## Usage

```js
const StylelintPlugin = require('stylelint-webpack-plugin');
const stylelintReporter = require('stylelint-html-reporter-stzhang');
module.exports = {
  plugins: [
    new StylelintPlugin({
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
      formatter: stylelintReporter()
    })
  ]
};
```

## Options

<b>filename</b> - (Optional) - Name of file to be generated

```js
const StylelintPlugin = require('stylelint-webpack-plugin');
const stylelintReporter = require('stylelint-html-reporter-stzhang');
module.exports = {
  plugins: [
    new StylelintPlugin({
      files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
      formatter: stylelintReporter({
        filename: path.join(config.build.assetsRoot, 'stylelint-report.html')
      })
    })
  ]
};
```
