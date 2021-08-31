module.exports = {
	e: Math.E,
	pi: Math.PI,
	exp: Math.exp,
	sin: Math.sin,
	cos: Math.cos,
	log: Math.log,
	log2: Math.log2,
	log10: Math.log10,
	pow: arguments => Math.pow(...arguments),
	sqrt: Math.sqrt,
	random: Math.random,
	floor: Math.floor,
	ceil: Math.ceil,
	abs: Math.abs,
	sign: Math.sign,
	min: arguments => Math.min(...arguments),
	max: arguments => Math.max(...arguments)
};
