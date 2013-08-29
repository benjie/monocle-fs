/*global describe:true, it:true */
"use strict";

var fs = require("../lib/fs")
  , path = require("path")
  , testDir = path.resolve(__dirname)
  , should = require("should")
  , run = require("monocle.js").run;

describe('monocle-fs', function() {
  var testData = 'foo bar baz';
  var testFile = path.resolve(testDir, 'test.dat');

  it('should error on statting files that don\'t exist', function(done) {
    run(function*() {
      var err;
      try {
        var stat = yield fs.stat(testFile);
      } catch (e) {
        err = e;
      }
      should.exist(err);
      done();
    });
  });

  it('should read and write files', function(done) {
    run(function*() {
      yield fs.writeFile(testFile, testData);
      var data = yield fs.readFile(testFile);
      data.toString('utf8').should.equal(testData);
      done();
    });
  });

  it('should stat files that do exist', function(done) {
    run(function*() {
      var stat = yield fs.stat(testFile);
      should.exist(stat.uid);
      should.exist(stat.gid);
      done();
    });
  });

  it('should delete files', function(done) {
    run(function*() {
      yield fs.unlink(testFile);
      done();
    });
  });

});
