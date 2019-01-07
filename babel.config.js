module.exports = function (api) {
  api.cache(true)
  const presets = [ "@babel/preset-env" ];
  const plugins = [
    "dynamic-import-node-babel-7",
    "@babel/plugin-syntax-dynamic-import"
  ];
  return {
    presets,
    plugins
  };
}
