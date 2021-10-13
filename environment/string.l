{
	length: s => s.length,
	indexOf: [s, t] => js.call [s.indexOf, s, [t]],
	substr: [s, [i, l]] => js.call [s.substr, s, [i, l]]
}
