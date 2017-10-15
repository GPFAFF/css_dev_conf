# Slaying Webpack Dragon

## [Varun Vachhar](https://twitter.com/winkervsbecks?lang=en)

### [Slides](tiny.cc/webpack-dragon)

 1. Bundling
   we dont send our module.js, we bundle.

   Current bundling approaches

  1. Task Runners - Grunt, Gulp, etc
  Write and configure tasks
  Can do pretty much anything.
  Can use it as build tool, point task runner to src and run tasks.

  1. Or use bundlers, rollup, webpack, browserfiy

   Point bundler to starting point.  Parse imports and build dependency graph to maintain order and optimization.

   npm install webpack
   install as local instead of global because of different versions.

   primarily using it as CLI.

   4 core concepts,

   entry output loaders and plugins

   entry - starting point of app
   output - telling webpack where to put it, and what to call it

   `webpack-dev-server --content-base --public webpack.config.js`

### Everything is a module!

All files, css/html/scss/jpegs
ES 2015 import statements
Require statements
@import statements in stylesheets
And even url's in CSS or HTML

### Loaders

1. Specify rules.
  ```js
  module: {
    rules: [
      test: 'Specific extension'
      include: 'which part of application are you transpiling/compiling'
      use: 'what loader to use'
    ]
  }
  ```

1. Chaning loaders - reads right to left.

Plugins - they customize or enhance the build process in a variety of ways.

Style loader can't cache css, one large HTTP request.
Inline the css in the bundle.  We can use extractTextPlugin instead to remove the css.

code splitting,  html css and main chunk.  then lazy load as the user navigates to other chunks asynchrnously.

`import Equilateral from './Equilateral` - static imports, synchornous, soon as webpack encounters this it adds to bundle.

`import('./Equilateral)` - dynamic and call as function, this has dramatic effect, now webpack wont include in bundle it was split into chunk and will load async.

You can then use a promise.

webpack bundle analyzer - get detailed info of what gets into bundle.js

npm scripts

`preanalyze: "webpack --config webpack.config.js --profile --json > stats.json`

`analyze: "webpack-bundle-analyzer`

good place to make sure its not pulling in dependencies its not using.

### prevent code duplication - commonChunkPlugin - extract all duplicated code into a chunk.

Getting ready for production

```js
webpack.definePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
})
```

`new webpack.optimize.UglifiyJsPlugin()`

webpack.academy webpack.js.org

write own configs, read the config generated by CLI's