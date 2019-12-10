# Webpack
By default webpack will handle the sourcemap generation well, check out the docs for the [devtool option](https://webpack.js.org/configuration/devtool/) to check which options you can use. 

## CSS loader
All working no problems.

## SASS loader
Some setups experience problems with incorrect source paths, this is [being looked into](https://github.com/sass/node-sass/issues/2684).
``` js
	{
	    // the `sourceMap` option must be set to true on the "css-loader"
	    // compiles Sass to CSS
	    loader: "sass-loader",
	    options: {
	        sourceMap: true,
	        outputStyle: 'compressed', // this can fix line-shift problems for some
	        sourceMapContents: false   // feel free to disable these if you want
	    }
	}
```
*Note: This can also mess up the source path of your `.css` files*