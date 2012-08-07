var renderer = function(parent) {
	var self = base(parent);
	self.name = 'renderer';

	self.setup = function() {
		self.log('renderer.setup: Not overridden');
	};

	self.reset = function() {
		self.log('renderer.reset: Not overridden');
	};

	self.render = function() {
		self.log('renderer.render: Not overridden');
	};

	self.write = function(x, y, text) {
		self.log('renderer.write: Not overridden');
	};

	return self;
};
