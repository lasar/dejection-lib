var scenery_chamber = function(parent) {
	var self = scenery_lines(parent);
	self.name = 'scenery_chamber';

	self.lineWidth = 1;

	self.generate = function() {
		self.initialize();

		// Huge cross
		self.drawRect({x: 25, y: 150, w: 300, h: 50});
		self.drawRect({x: 150, y: 25, w: 50, h: 300});

		// Big cage
		self.drawRect({x: 400, y: 100, w: 150, h: 5});
		self.drawRect({x: 400, y: 80, w: 5, h: 20});
		self.drawRect({x: 545, y: 80, w: 5, h: 20});

		// Small cage
		self.drawRect({x: 400, y: 200, w: 60, h: 5});
		self.drawRect({x: 400, y: 180, w: 5, h: 20});
		self.drawRect({x: 455, y: 180, w: 5, h: 20});

		// Circle
		self.drawCircle({x: 400, y: 250, w: 100});
		self.drawCircle({x: 520, y: 250, w: 30});
	}


	return self;
};