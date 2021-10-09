var Scope = require('l/Scope');
var parse = require('l/parse');
var compile = require('l/compile');
var global = require('l/global');
var interpretation = require('l/test/f');

var [, , source] = process.argv;
try {
	var s = parse(source);
	var f = compile(s, global.push(new Scope({
		console: 'variable',
		fs: 'variable',
		math: 'variable',
		number: 'variable',
		string: 'variable',
		array: 'variable',
		object: 'variable',
		global: 'variable',
		js: 'variable',
		node: 'variable'
	})), interpretation);
	var environment = require('l/test/f.global').push(new Scope({
		console: require('./environment/console'),
		fs: require('./environment/fs'),
		math: require('./environment/math'),
		number: require('./environment/number'),
		string: require('./environment/string'),
		array: require('./environment/array'),
		object: require('./environment/object'),
		global: require('./environment/global'),
		js: require('./environment/js'),
		node: { require: require }
	}));
	var v = f(environment);
	console.log(v);
} catch (e) {
	process.exitCode = 1;
	console.error(e.message);
}
