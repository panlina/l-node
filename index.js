var Environment = require('l/Environment');
var Scope = require('l/Scope');
var parse = require('l/parse');
var compile = require('l/compile');
var interpretation = require('l/test/f');

var [, , source] = process.argv;
var s = parse(source);
var f = compile(s, new Environment(new Scope({ console: 'variable' })), interpretation);
var environment = new Environment(new Scope({ console: require('./environment/console') }));
var v = f(environment);
console.log(v);
