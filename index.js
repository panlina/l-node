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
		math: 'variable',
		number: 'variable',
		string: 'variable',
		array: 'variable',
		object: 'variable',
		js: 'variable'
	})), interpretation);
	var environment = new Environment(new Scope({
		console: require('./environment/console'),
		fs: require('./environment/fs'),
		math: require('./environment/math'),
		number: require('./environment/number'),
		string: require('./environment/string'),
		array: require('./environment/array'),
		object: require('./environment/object'),
		js: require('./environment/js')
	}));
	var v = f(environment);
	console.log(v);
} catch (e) {
	process.exitCode = 1;
	console.error(e.message);
}
