var csso = require('csso');

function CSSOBrunch (config) {
  config = config || {};
  var plugins = config.plugins || {};
  this.options = plugins.csso || {};
}

CSSOBrunch.prototype.brunchPlugin = true;
CSSOBrunch.prototype.type = 'stylesheet';
CSSOBrunch.prototype.extension = 'css';

CSSOBrunch.prototype.optimize = function (params, callback) {
  var optimized, error;
  try {
    optimized = csso.justDoIt(params.data, this.options.restructure === false);
  } catch (err) {
    error = "CSSO failed on " + params.path + ": " + err;
  } finally {
    callback(error, optimized || params.data);
  }
};

module.exports = CSSOBrunch;
