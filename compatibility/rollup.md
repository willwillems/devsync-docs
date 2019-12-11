# Rollup
Rollup has no default way of handling CSS imports and does not present any problems itself that prevent correct sourcemaps from being generated.

## [rollup-plugin-postcss](https://github.com/egoist/rollup-plugin-postcss)
Currently [the sourceRoot is missing](https://github.com/egoist/rollup-plugin-postcss/issues/49) from the source code path, for example `src/style/main.css` is instead generated as `main.css`.