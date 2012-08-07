var scenery_testing = function(parent) {
	var self = scenery(parent);
	self.name = 'scenery_testing';

	self.generate = function() {
		self.initialize();

		// Box with vertical walls
		self.drawLine({x:10, y:100, length:2, inclination:1, width:100});
		self.drawLine({x:100, y:100, length:2, inclination:1, width:100});
		self.drawLine({x:10, y:200, length:92, inclination:0, width:2});

		self.drawLine({x:150, y:200, length:80, inclination:0.25, width:2});
		self.drawLine({x:230, y:220, length:80, inclination:-0.25, width:2});

		self.drawLine({x:150, y:300, length:80, inclination:-0.25, width:2});
		self.drawLine({x:230, y:280, length:80, inclination:0.25, width:2});

	}

	self.drawLine = function(line) {
		var c = {r:255, g:0, b:0, a:255};
		for(var x=0; x<line.length; x++) {
			for(var w=0; w<line.width; w++) {
				self.set(line.x+x, Math.round(line.y+(x*line.inclination))+w, 1, c);
			}
		}
	}

	return self;
};