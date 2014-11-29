var CSSOBruch = require('../');
var expect = require('chai').expect;

describe('CSSOBrunch', function () {
  var plugin;

  beforeEach(function () {
    plugin = new CSSOBruch();
  });

  it('should be an brunch plugin object', function () {
    expect(plugin).to.be.an('object');
    expect(plugin.brunchPlugin).to.be.true;
  });

  it('should be stylesheet plugin', function () {
    expect(plugin.type).to.be.equal('stylesheet');
    expect(plugin.extension).to.be.equal('css');
  });

  it('should has method #optimize', function () {
    expect(plugin.optimize).to.be.an('function');
  });

  it('should optimize css', function (done) {
    var content = ".a { color: #ffffff; } .b { color: #ffffff; }";
    var expected = ".a,.b{color:#fff}";
    plugin.optimize({
      data: content
    }, function (error, data) {
      expect(data).to.be.equal(expected);
      done();
    });
  });

  it('should optimize css with csso options', function (done) {
    var content = ".a { color: #ffffff; } .b { color: #ffffff; }";
    var expected = ".a{color:#fff}.b{color:#fff}";
    plugin.options = {
      restructure: false
    };
    plugin.optimize({
      data: content
    }, function (error, data) {
      expect(data).to.be.equal(expected);
      done();
    });
  });

  it('should call callback with error if occurs', function (done) {
    var content = ".css { color #ffffff; }";
    plugin.optimize({
      data: content
    }, function (error) {
      expect(error).to.be.ok;
      done();
    });
  });

});
