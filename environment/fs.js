var fs = require('fs');

module.exports = {
	read: arguments => fs.readFileSync(...arguments),
	write: arguments => fs.writeFileSync(...arguments)
};
