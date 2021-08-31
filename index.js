var Environment = require('l/Environment');
var Scope = require('l/Scope');
var parse = require('l/parse');
var compile = require('l/compile');
var interpretation = require('l/test/f');

var [, , source] = process.argv;
try {
	var s = parse(source);
	var f = compile(s, new Environment(new Scope({
		console: 'variable',
		fs: 'variable',
		math: 'variable'
	})), interpretation);
	var environment = new Environment(new Scope({
		console: require('./environment/console'),
		fs: require('./environment/fs'),
		math: require('./environment/math')
	}));
	var v = f(environment);
	console.log(v);
} catch (e) {
	console.error(e.message);
}
