var env = function(parent) {
	var self = base(parent);
	self.name = 'env';

	self.setup = function() {
		self.log('env.setup: Not overridden');
	};

	return self;
};
