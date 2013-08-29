"use strict";

var fs = require("fs")
  , _ = require("underscore")
  , monocle = require('monocle.js')
  , monoclize = monocle.monoclize;

var monocle_fs = _.clone(fs);
var methods = [
  'rename'
  , 'ftruncate'
  , 'truncate'
  , 'chown'
  , 'fchown'
  , 'lchown'
  , 'chmod'
  , 'fchmod'
  , 'lchmod'
  , 'stat'
  , 'lstat'
  , 'fstat'
  , 'link'
  , 'symlink'
  , 'readlink'
  , 'realpath'
  , 'unlink'
  , 'rmdir'
  , 'mkdir'
  , 'readdir'
  , 'close'
  , 'open'
  , 'utimes'
  , 'futimes'
  , 'fsync'
  , 'write'
  , 'read'
  , 'writeFile'
  , 'readFile'
  , 'appendFile'
  , 'exists'
];

_.each(methods, function(method) {
  monocle_fs[method] = monoclize(fs[method], fs);
});

module.exports = monocle_fs;
