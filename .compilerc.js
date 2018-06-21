const config = JSON.parse(require('fs').readFileSync('./.compilerc', {encoding: 'utf8'}));
const node_env = process.env.NODE_ENV || 'development';
const mimes = {};
function merge_config(conf1, conf2) {
  // fill in something better?
  return conf2;
}
for (let key of config) {
  if (key !== 'env') {
    mimes[key] = config[key];
  }
}
if (config.env && config.env[node_env]) {
  const override = config.env[node_env];
  for (let key of override) {
    mimes[key] = merge_config(mimes[key], override[key]);
  }
}
module.exports = {};
for (let mime of mimes) {
  switch (mime) {
      // fill in: map the currently fixed options like 'text/javascript' to ['run', 'babel'] or whatever, etc.
    default:
      module.exports[mime] = ['pass through'];
      break;
  }
}
