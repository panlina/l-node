module.exports = {
	length: s => s.length,
	indexOf: ([s, t]) => s.indexOf(t),
	substr: ([s, [i, l]]) => s.substr(i, l)
};
