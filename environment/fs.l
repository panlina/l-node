var fs;
let fs = node.require("fs");

let return = {
	read: arguments => js.call [fs.readFileSync, fs, arguments],
	write: arguments => js.call [fs.writeFileSync, fs, arguments]
};
