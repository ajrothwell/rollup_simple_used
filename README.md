# rollup_simple_used

this repo imports the module 'rollup_simple' for testing tree-shaking.

https://github.com/ajrothwell/rollup_simple

That module uses experimentalCodeSplitting and experimentalDynamicImport, and creates a separate chunk for the code in bar.js.

This repo uses babel, as well as as these plugins:

@babel/plugin-syntax-dynamic-import

babel-plugin-dynamic-import-node-babel-7

It also has a babel.config.js file which implements those 2 plugins.

It automatically creates 'app.js' and '1.js'
