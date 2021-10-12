var fs = require('fs');
var path = require('path');
var Scope = require('l/Scope');
var parse = require('l/parse');
var compile = require('l/compile');
var global = require('l/global');
var interpretation = require('l/test/f');

var [, , source] = process.argv;
try {
	var s = parse(source);
	var environment = global.push(new Scope({
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
	}));
	var f = compile(s, environment, interpretation);
	var runtimeEnvironment = require('l/test/f.global').push(new Scope({
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
	runtimeEnvironment.scope.console = load('./environment/console.l');
	function load(file) {
		var source = fs.readFileSync(path.join(__dirname, file), 'utf8');
		var s = parse(source);
		var f = compile(
			s,
			environment,
			interpretation
		);
		return f(runtimeEnvironment);
	}
	var v = f(runtimeEnvironment);
	console.log(v);
} catch (e) {
	process.exitCode = 1;
	console.error(e.message);
}
