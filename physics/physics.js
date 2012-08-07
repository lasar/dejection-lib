var physics = function(parent) {
	var self = base(parent);
	self.name = 'physics';

	self.move = function() {
		self.log('physics.move: Not overridden');
	}

	return self;
};
