var scenery_chamber = function(parent) {
	var self = scenery_lines(parent);
	self.name = 'scenery_chamber';

	self.lineWidth = 1;

	self.generate = function() {
		self.initialize();

		self.drawRect({
			x: 25,
			y: 150,
			w: 300,
			h: 50
		});

		self.drawRect({
			x: 150,
			y: 25,
			w: 50,
			h: 300
		});
	}


	return self;
};