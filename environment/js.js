module.exports = {
	call: ([f, _this, arguments]) => f.apply(_this, arguments),
	callback: f => { return function () { return f([this, arguments]); } }
};
