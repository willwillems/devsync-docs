# Vue JS
Fully functional and tested with modern set-up's.

When creating a Vue.js project with the Vue CLI you should enable CSS sourcemaps in the `vue.config.js` file by setting the `css.sourceMap` to `true`:

``` js
// vue.config.js
module.exports = {
  css: {
    sourceMap: true
  }
}
```

## Nuxt
Fully functional without any problems or caveats.

## Known problems

### Relative path is added twice when using CSS
Status: unverified

Description: When using vanilla CSS with the Vue CLI it is possible for sourcemaps to be incorrectly generated due to the relative file path being added a second time due to a bug. 

For example the path: `/Users/Admin/Desktop/my-project/src/App.vue` will be generated as: `/Users/Admin/Desktop/my-project/src/my-project/src/App.vue`.

Until this gets fixed you can just use your CSS in SCSS mode by installing `node-sass` and `sass-loader` with `npm i sass-loader node-sass` and adding `lang="scss"` to your script tags.