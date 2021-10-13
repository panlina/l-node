{
	parseInt: [n, radix] => js.call [global.Number.parseInt, global.Number, [n, radix]],
	toString: [n, radix] => js.call [n.toString, n, [radix]]
}
