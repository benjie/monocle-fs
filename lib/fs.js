"use strict";

var fs = require("fs")
  , _ = require("underscore")
  , monocle = require('monocle.js')
  , o_C = monocle.o_C
  , o_O = monocle.o_O;

var monocle_fs = {};
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
  monocle_fs[method] = o_O(function*() {
    var cb = o_C();
    var args = Array.prototype.slice.call(arguments, 0);
    args.push(cb);
    fs[method].apply(fs, args);
    return (yield cb);
  });
});

module.exports = monocle_fs;
