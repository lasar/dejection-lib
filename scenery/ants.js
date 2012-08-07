var scenery_ants = function(parent) {
	var self = scenery(parent);
	self.name = 'scenery_ants';

	self.generate = function() {
		self.initialize();
		
		self.loop(function(x, y, p) {
			var val = self.rnd(0, 1);
			return val;
		}, true);
		
	}

	return self;
};