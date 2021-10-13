{
	e: global.Math.E,
	pi: global.Math.PI,
	exp: global.Math.exp,
	sin: global.Math.sin,
	cos: global.Math.cos,
	log: global.Math.log,
	log2: global.Math.log2,
	log10: global.Math.log10,
	pow: arguments => js.call [global.Math.pow, global.Math, arguments],
	sqrt: global.Math.sqrt,
	random: global.Math.random,
	floor: global.Math.floor,
	ceil: global.Math.ceil,
	abs: global.Math.abs,
	sign: global.Math.sign,
	min: arguments => js.call [global.Math.min, global.Math, arguments],
	max: arguments => js.call [global.Math.max, global.Math, arguments]
}
