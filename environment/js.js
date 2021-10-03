module.exports = {
	call: ([f, _this, arguments]) => f.apply(_this, arguments)
};
