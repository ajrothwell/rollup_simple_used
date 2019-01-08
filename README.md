# webpack_simple_2

this repo imports the module 'rollup_simple_2' for testing tree-shaking.

https://github.com/ajrothwell/rollup_simple_2

That module uses experimentalCodeSplitting and experimentalDynamicImport, and creates a separate chunk for the code in bar.js.

This repo uses babel, as well as as these plugins:

@babel/plugin-syntax-dynamic-import

babel-plugin-dynamic-import-node-babel-7

It also has a babel.config.js file which implements those 2 plugins.

It automatically creates 'app.js' and '1.js'

It can be seen in action live at https://ajrothwell.github.io/webpack_simple_2/dist/
It can be analyzed in action live at https://ajrothwell.github.io/webpack_simple_2/dist/statistics.html
